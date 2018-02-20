import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'
import InputMoment from 'input-moment'

import CompetitionsFullPage from './CompetitionsFullPage.jsx'
// Components
import MenuBar from './MenuBar.jsx'
import SideMenu from './SideMenu.jsx'
import UserFeed from './UserFeed.jsx'

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      competitionData: [],
      goals: ['test1', 'test2'],
      isHidden: true,
      compName: '',
      compCat: '',
      compStart: moment(),
      compStartClick: false,
      compEnd: moment(),
      compEndClick: true
    }
    this.competitionsHandleClick = this.competitionsHandleClick.bind(this)
    this.handleCompName = this.handleCompName.bind(this)
    this.handleCompCat = this.handleCompCat.bind(this)
    this.competitionsSubmit = this.competitionsSubmit.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
    this.handleCompStartSave = this.handleCompStartSave.bind(this)
    this.handleCompEndSave = this.handleCompEndSave.bind(this)
  }
  componentDidMount () {
    this.fetchGoals()
    this.fetchCompetitions()
  }

  handleItemClick(name) {
    this.setState({ activeItem: name })
  }

  competitionsHandleClick(isHidden) {
    this.setState({
      isHidden: !isHidden
    })
  }

  handleCompName(compName) {
    console.log(compName);
    this.setState({
      compName: compName.target.value
    })
  }

  handleCompCat(e, compCat) {
    this.setState({
      compCat: compCat.value
    })
  }

  handleStartChange (m) {
    console.log('handle startchange in userhome m coming back', m)
    this.setState({
      compStart: m // date:  moment(selectedDate).format('DD/MM/YYYY')
    })
  }

  handleEndChange (m) {
    console.log('end change in userhome', m)
    this.setState({
      compEnd: m
    })
  }

  handleCompStartSave () {
    console.log('saving clicking changes components start date')
    this.setState({
      compStartSaveClick: true
    })
  }

  handleCompEndSave (falsey) {
    console.log('saving clicking changes components end date')
    this.setState({
      compEndClick: !falsey
    })
  }

  fetchGoals () {
    axios
      .get("/api/goal")
      .then(response => {
        this.setState({
          goals: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  fetchCompetitions() {
    axios
      .get("/api/getcompetitions")
      .then(response => {
        this.setState({
          competitionData: response.data
        });
        console.log("data from the db in user home", response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  competitionsSubmit(
    compsName,
    compsCat,
    compsStart,
    compsEnd,
    hiddenUserPage
  ) {
    if (compsCat === 'Build Muscle') {
      compsCat = 'Build_Muscle';
    } else if (compsCat === 'Lose Weight') {
      compsCat = 'Lose_Weight'
    } else {
      compsCat = compsCat
    }
    console.log(
      "what im submitting in the user component",
      compsName,
      compsCat,
      compsStart,
      compsEnd,
      hiddenUserPage
    )
    this.setState({
      isHidden: !hiddenUserPage,
      compStart: moment(),
      compEnd: moment(),
      compStartClick: false,
      compEndClick: false
    })
    axios
      .post("/api/competitions", {
        comptetionName: compsName,
        competitionCategory: compsCat,
        competitionStart: compsStart,
        competitionEnd: compsEnd,
        competitionPic: ""
      })
      .then(response => {
        console.log("in userHome file data back from server", response.data);
        this.setState({
          competitionData: response.data
        })
      })
      .catch(error => {
        console.log("this is the error after a post submit request", error);
      })
  }

  render(props) {
    console.log('ishidden value on start of app', this.state.isHidden)
    const { activeItem } = this.state || {}
    if (this.state.isHidden) {
      return (
        <div>
          <MenuBar
            isHidden={this.state.isHidden}
            competitionsHandleClick={this.competitionsHandleClick}
          />
          <Grid>
            <Grid.Column width={5}>
              <h1>Bio</h1>
              <Grid.Row>
                <Card>
                  <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Card.Header>Manny</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2018</span>
                    </Card.Meta>
                    <Card.Description>
                      Manny is some dude living in the Bay.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Row>

              <br />
              <br />

              <Grid.Row>
                <SideMenu
                  Data={this.state.competitionData}
                  goals={this.state.goals}
                  competitionsHandleClick={this.competitionsHandleClick}
                  isHidden={this.state.isHidden}
                  // {...props}
                />
              </Grid.Row>
            </Grid.Column>
            <br />
            <br />
            <Grid.Column width={7}>
              <h1>Feed</h1>
              <Grid.Row>
                <UserFeed />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1>Trophies</h1>
              <Card>
                <div className="ui tiny image">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Twemoji2_1f3c6.svg"
                    title="First Place"
                    size="small"
                  />
                </div>
                <div className="content">
                  <div className="header">Get Huge</div>
                  <div className="meta">First Place</div>
                </div>
							</Card>
							<Card>
								<div className="ui tiny image">
									<Image
										src="https://laurenswrittenword.files.wordpress.com/2013/11/bigstock-silver-trophy-vector-13932809.jpg"
										title="Second Place"
										size="small"
									/>
								</div>
								<div className="content">
									<div className="header">You Can Do It</div>
									<div className="meta">Second Place</div>
								</div>
							</Card>
							<Card>
								<div className="ui tiny image">
									<Image
										src="https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-59-256.png"
										title="No Place"
										size="small"
									/>
								</div>
								<div className="content">
									<div className="header">Lose Weight</div>
									<div className="meta">Didn't Place</div>
								</div>
							</Card>
							<Card>
								<div className="ui tiny image">
									<Image
										src="https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-59-256.png"
										title="No Place"
										size="small"
									/>
								</div>
								<div className="content">
									<div className="header">Beat the Lake Run</div>
									<div className="meta">Didn't Place</div>
								</div>
							</Card>
						</Grid.Column>
					</Grid>
				</div>
			);
		}
		return (
			<CompetitionsFullPage
				Data={this.state.competitionData}
				isHidden={this.state.isHidden}
				compName={this.state.compName}
				compCat={this.state.compCat}
				compStart={this.state.compStart}
				compEnd={this.state.compEnd}
				handleCompName={this.handleCompName}
				handleCompCat={this.handleCompCat}
				handleCompStartSave={this.handleCompStartSave} // this 1
				compStartClick={this.state.compStartClick} // this 1
				handleCompEndSave={this.handleCompEndSave} // this 1
        compEndClick={this.state.compEndClick} // this 1
        handleStartChange={this.handleStartChange}
        handleEndChange={this.handleEndChange}
				competitionsSubmit={this.competitionsSubmit}
			/>
		)
	}
}

export default UserHome
