import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import axios from 'axios'

import CompetitionsFullPage from './CompetitionsFullPage.jsx'
// Components
import MenuBar from './MenuBar.jsx'
import SideMenu from './SideMenu.jsx'
import UserFeed from './UserFeed.jsx'
import AddGoal from './AddGoal.jsx'

const ROOT_URL = 'http://localhost:3000'

class UserHome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      competitionData: [],
      goalTitle: '',
      goalDesc: '',
      goals: ['test1', 'test2'],
      isHidden: true,
      compName: '',
      compCat: '',
      compStart: '',
      compEnd: ''
    }
    this.handleGoalTitleChange = this.handleGoalTitleChange.bind(this)
    this.hanldeGoalDescChange = this.hanldeGoalDescChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.competitionsHandleClick = this.competitionsHandleClick.bind(this)
    this.handleCompName = this.handleCompName.bind(this)
    this.handleCompCat = this.handleCompCat.bind(this)
    this.handleCompStart = this.handleCompStart.bind(this)
    this.handleCompEnd = this.handleCompEnd.bind(this)
    this.competitionsSubmit = this.competitionsSubmit.bind(this)
  }

  componentDidMount () {
    this.fetchGoals()
    this.fetchCompetitions()
  }

  handleGoalTitleChange (e) {
    this.setState({
      goalTitle: e.target.value
    })
  }

  hanldeGoalDescChange (e) {
    this.setState({
      goalDesc: e.target.value
    })
  }

  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  competitionsHandleClick (isHidden) {
    this.setState({
      isHidden: !isHidden
    })
  }

  handleCompName (compName) {
    console.log(compName)
    this.setState({
      compName: compName.target.value
    })
  }

  handleCompCat (e, compCat) {
    this.setState({
      compCat: compCat.value
    })
  }

  handleCompStart (compStarts) {
    console.log('in the user home', compStarts.target.value)
    this.setState({
      compStart: compStarts.target.value
    })
  }
  handleCompEnd (compEnd) {
    console.log(compEnd)
    this.setState({
      compEnd: compEnd.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    const copyOfGoals = [...this.state.goals]
    copyOfGoals.push(this.state.goalTitle)

    axios
      .post(ROOT_URL + "/api/goal", {
        goal: this.state.goalTitle
      })
      .then(response => {
        this.fetchGoals()
      })
      .catch(error => {
        console.log(error)
      })

    this.setState({
      goals: copyOfGoals,
      goalTitle: ''
    })
  }

  fetchGoals () {
    axios
      .get(ROOT_URL + '/api/goal')
      .then((response) => {
        this.setState({
          goals: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  fetchCompetitions () {
    axios.get('/api/getcompetitions')
      .then((response) => {
        this.setState({
          competitionData: response.data
        })
        console.log('data from the db in user home', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  competitionsSubmit (compsName, compsCat, compsStart, compsEnd, hiddenUserPage) {
    console.log(
      'what im submitting in the user component',
      compsName,
      compsCat,
      compsStart,
      compsEnd
    )
    this.setState({
      isHidden: !hiddenUserPage
    })
    axios.post('/api/competitions', {
      comptetionName: compsName,
      competitionCategory: compsCat,
      competitionStart: compsStart,
      competitionEnd: compsEnd
    })
      .then((response) => {
        console.log('did all my comps come back from the db?', response.data.data)
        this.setState({
          competitionData: response.data
        })
      })
      .catch((error) => {
        console.log('this is the error after a post submit request', error)
      })
  }

  render (props) {
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
                <AddGoal />
              </Grid.Row>
              <Grid.Row>
                <form
                  onSubmit={this.handleSubmit}
                  style={{ width: 290 }}
                  ref="commentForm"
                  className="ui form"
                >
                  <div className="field">
                    <label>Goal Title</label>
                    <input
                      type="text"
                      value={this.state.goalTitle}
                      onChange={this.handleGoalTitleChange}
                      placeholder="Enter your goal here..."
                    />
                  </div>
                  <div className="field">
                    <label>Goal Description</label>
                    <textarea
                      placeholder="Describe your goal..."
                      rows="4"
                      value={this.state.goalDesc}
                      onChange={this.hanldeGoalDescChange}
                    />
                  </div>
                  <button type="submit" className="ui button">
                    Submit
                  </button>
                </form>
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
      )
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
        handleCompStart={this.handleCompStart}
        handleCompEnd={this.handleCompEnd}
        competitionsSubmit={this.competitionsSubmit}
      />
    )
  }
}

export default UserHome
