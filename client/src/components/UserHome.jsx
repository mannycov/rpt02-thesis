import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Menu, Segment } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'
import InputMoment from 'input-moment'
import CompetitionsFullPage from './CompetitionsFullPage.jsx'

// Components
import MenuBar from './MenuBar.jsx'
import SideMenu from './SideMenu.jsx'
import Goal from './Goal.jsx'
import Accomplishments from './Accomplishments.jsx'
import CardComponent from './CardComponent.jsx'

class UserHome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: 'active',
      userId: null,
      competitionData: [],
      goals: [],
      accomplishments: [],
      isHidden: true,
      compName: '',
      compCat: '',
      compStart: moment(),
      compStartClick: false,
      compEnd: moment(),
      compEndClick: true,
      size: '',
      open: false,
      goalIDtoDelete: ''
    }
    this.competitionsHandleClick = this.competitionsHandleClick.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
    this.handleCompName = this.handleCompName.bind(this)
    this.handleCompCat = this.handleCompCat.bind(this)
    this.competitionsSubmit = this.competitionsSubmit.bind(this)
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
    this.handleCompStartSave = this.handleCompStartSave.bind(this)
    this.handleCompEndSave = this.handleCompEndSave.bind(this)
    this.handleDeleteAccomplishment = this.handleDeleteAccomplishment.bind(this)
    this.showDeleteAccomplishmentModal = this.showDeleteAccomplishmentModal.bind(this)
    this.closeDeleteAccomplishmentModal = this.closeDeleteAccomplishmentModal.bind(this)
    this.closeModalAndDelete = this.closeModalAndDelete.bind(this)
  }
  
  componentDidMount () {
    this.fetchGoals()
  }

  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  competitionsHandleClick (isHidden) {
    this.setState({
      isHidden: !isHidden
    })
  }

  handleMenuItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  handleCompName (compName) {
    this.setState({
      compName: compName.target.value
    })
  }

  handleCompCat (e, compCat) {
    this.setState({
      compCat: compCat.value
    })
  }

  handleStartChange (m) {
    this.setState({
      compStart: m
    })
  }

  handleEndChange (m) {
    this.setState({
      compEnd: m
    })
  }

  handleCompStartSave () {
    this.setState({
      compStartSaveClick: true
    })
  }

  handleCompEndSave (falsey) {
    this.setState({
      compEndClick: !falsey
    })
  }

  fetchGoals () {
    axios
      .get('/api/goal')
      .then((response) => {
        this.setState({
          goals: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleDeleteAccomplishment (id) {
    axios
      .delete(`/api/goal/${id}`)
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  showDeleteAccomplishmentModal (size, id) {
    this.setState({
      size,
      open: true,
      goalIDtoDelete: id
    })
  }

  closeDeleteAccomplishmentModal () {
    this.setState({
      open: false
    })
  }

  closeModalAndDelete () {
    const { goalIDtoDelete } = this.state
    this.handleDeleteAccomplishment(goalIDtoDelete)
    this.setState({ open: false })
  }

  competitionsSubmit (
    compsName,
    compsCat,
    compsStart,
    compsEnd,
    hiddenUserPage,
    userIdComp
  ) {
    if (compsCat === 'Build Muscle') {
      compsCat = 'Build_Muscle'
    } else if (compsCat === 'Lose Weight') {
      compsCat = 'Lose_Weight'
    } else {
      compsCat = compsCat
    }
    this.setState({
      isHidden: !hiddenUserPage,
      compStart: moment(),
      compEnd: moment(),
      compStartClick: false,
      compEndClick: false,
      userId: null
    })
    axios
      .post('/api/competitions', {
        comptetionName: compsName,
        competitionCategory: compsCat,
        competitionStart: compsStart,
        competitionEnd: compsEnd,
        competitionPic: '',
        userIdComp: userIdComp
      })
      .then((response) => {
        console.log('in userHome file data back from server', response.data)
        this.setState({
          competitionData: response.data
        })
      })
      .catch((error) => {
        console.log('this is the error after a post submit request', error)
      })
  }

  render (props) {
    const {
      activeItem,
      accomplishments,
      goals,
      size,
      open,
      goalIDtoDelete
    } = this.state || {}
    if (this.state.isHidden) {
      return (
        <div>
          <MenuBar isHidden={this.state.isHidden} competitionsHandleClick={this.competitionsHandleClick} />

          <Grid className="main-grid" columns={2} inverted>
            <Grid.Column className="menucolumn" width={3}>
              {/* <Image className="profileimage" src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png' size='small' circular /> */}
              <div id="side-menu">
                <a href="#">Active</a>
                <a href="#">Accomplishments</a>
              </div>
              {/* <Menu fluid vertical tabular>
                <Menu.Item name='active' active={activeItem === 'active'} onClick={this.handleMenuItemClick} />
                <Menu.Item name='accomplishments' active={activeItem === 'accomplishments'} onClick={this.handleMenuItemClick} />
              </Menu> */}
            </Grid.Column>
            <Grid.Column className="goalscolumn" stretched width={12}>
              {activeItem === 'active' ? <h1 style={{ textAlign: 'center' }}>Active Goals</h1> : <h1 style={{ textAlign: 'center' }}>Accomplishments</h1>}
              {activeItem === 'active' ? <Goal /> : <Accomplishments goals={goals} size={size} open={open} goalIDtoDelete={goalIDtoDelete} showDeleteAccomplishmentModal={this.showDeleteAccomplishmentModal} closeDeleteAccomplishmentModal={this.closeDeleteAccomplishmentModal} handleDeleteAccomplishment={this.handleDeleteAccomplishment} closeModalAndDelete={this.closeModalAndDelete} />}
            </Grid.Column>
          </Grid>

          {/* <footer className="ui inverted vertical segment">
            <div className="ui container">
              <div className="ui equal width stackable grid">
                <div className="column">
                  <h4 className="ui inverted header">Compete today
                  </h4>
                  <p>Set goals for yourself and compete with friends who may have similar goals!
                  </p>
                </div>
                <div className="column">
                  <h4 className="ui inverted header">
            Get Fit
                  </h4>
                  <div className="ui inverted list">
                    <div className="item">
              Run a marathon
                    </div>
                    <div className="item">
              Lift more
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h4 className="ui header">
            Make Friends
                  </h4>
                  <div className="ui inverted list">
                    <div className="item">Help each other get better
                    </div>
                    <div className="item">Find locals that want to compete
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h4 className="ui inverted header">
            Have Fun
                  </h4>
                  <div className="ui inverted list">
                    <div className="item">We're all trying to get better. Compete and have fun along the way.
                    </div>

                  </div>
                </div>
              </div>
              <div className="ui equal width stackable grid">
                <div className="eight wide column">
            Copyright ©2018 BCM Inc.
                </div>
                <div className="column">
                  <div className="ui equal width grid">
                    <div className="column">
                      <div className="ui small inverted horizontal divided link list">
                        <a className="item" href="https://www.hackreactor.com" target="_blank" rel="noopener noreferrer">
                Hack Reactor</a>
                        <a className="item" href="fake@fake.com">Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}

          {/* <Grid>
            <Grid.Column width={5}>
              <h1>Bio</h1>
              <Grid.Row style={{ width: 290 }}>
                <Card>
                  <Card.Content>
                    <Card.Header>Bobby</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2018</span>
                    </Card.Meta>
                    <Card.Description>
											Bobby's in the Bay Area getting healthier
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Row>

              <br />

              <Grid.Row style={{ width: 290 }}>
                <SideMenu Data={this.state.competitionData} goals={this.state.goals} accomplishments={this.state.accomplishments} competitionsHandleClick={this.competitionsHandleClick} isHidden={this.state.isHidden} />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={7}>
              <h1 style={{ textAlign: 'center' }}>Active Goals</h1>
              <Grid.Row>
                <Goal />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1 style={{ textAlign: 'right' }}>Accomplishments</h1>
              <Accomplishments accomplishments={this.state.accomplishments} />
            </Grid.Column>
          </Grid> */}
        </div>
      )
    }
    return (
      <CompetitionsFullPage
        Data={this.state.competitionData}
        userId={this.state.userId}
        isHidden={this.state.isHidden}
        compName={this.state.compName}
        compCat={this.state.compCat}
        compStart={this.state.compStart}
        compEnd={this.state.compEnd}
        handleCompName={this.handleCompName}
        handleCompCat={this.handleCompCat}
        handleCompStartSave={this.handleCompStartSave}
        compStartClick={this.state.compStartClick}
        handleCompEndSave={this.handleCompEndSave}
        compEndClick={this.state.compEndClick}
        handleStartChange={this.handleStartChange}
        handleEndChange={this.handleEndChange}
        competitionsSubmit={this.competitionsSubmit}
      />
    )
  }
}

export default UserHome
