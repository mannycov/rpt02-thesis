import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Menu, Segment, Button } from 'semantic-ui-react'
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
      active: true,
      userId: this.props.match.params.id,
      userImg: '',
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
      goalIDtoDelete: '',
      userName: ''
    }
    this.competitionsHandleClick = this.competitionsHandleClick.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
    this.fetchPhoto = this.fetchPhoto.bind(this)
    this.handleCompName = this.handleCompName.bind(this)
    this.handleCompCat = this.handleCompCat.bind(this)
    this.competitionsSubmit = this.competitionsSubmit.bind(this)
    this.handleActiveClick = this.handleActiveClick.bind(this)
    this.handleAccomplishmentsClick = this.handleAccomplishmentsClick.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
    this.handleCompStartSave = this.handleCompStartSave.bind(this)
    this.handleCompEndSave = this.handleCompEndSave.bind(this)
    this.handleSelectPhoto = this.handleSelectPhoto.bind(this)
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this)
    this.handleDeleteAccomplishment = this.handleDeleteAccomplishment.bind(this)
    this.showDeleteAccomplishmentModal = this.showDeleteAccomplishmentModal.bind(this)
    this.closeDeleteAccomplishmentModal = this.closeDeleteAccomplishmentModal.bind(this)
    this.closeModalAndDelete = this.closeModalAndDelete.bind(this)
  }

  componentDidMount () {
    this.fetchUser()
    this.fetchGoals()
    this.fetchPhoto()
  }

  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  competitionsHandleClick (isHidden) {
    this.setState({
      isHidden: !isHidden
    })
  }

  handleActiveClick () {
    this.setState({ active: true })
  }

  handleAccomplishmentsClick () {
    this.setState({ active: false })
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

  handleSelectPhoto (e) {
    this.setState({
      userImg: e.target.files[0]
    })
  }

  handleUploadPhoto () {
    const { userImg, userId } = this.state
    const fd = new FormData()
    fd.append('image', userImg, userImg.name)
    axios
      .post(`/photo/${userId}`, fd)
      .then((response) => {
        this.fetchPhoto()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  fetchPhoto () {
    const { userId, userImg } = this.state
    axios
      .get(`/photo/${userId}`)
      .then((response) => {
        this.setState({ userImg: response.data[0].photo })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  fetchUser () {
    const { userId } = this.state
    axios
      .get(`/api/user/${userId}`)
      .then((response) => {
        this.setState({ userName: response.data[0].name })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  fetchGoals () {
    const { userId } = this.state
    axios
      .get(`/api/goal/${userId}`)
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
        userIdComp
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
      active,
      goals,
      size,
      open,
      goalIDtoDelete,
      userId,
      userName,
      userImg
    } = this.state || {}
    if (this.state.isHidden) {
      return (
        <div>
          <MenuBar isHidden={this.state.isHidden} competitionsHandleClick={this.competitionsHandleClick} userId={userId} />

          <Grid className="main-grid" columns={2} inverted>
            <Grid.Column className="menucolumn" width={3}>

              <div className="profile">
                <h1 id="profile-name">{userName}</h1>
                <img className="photo" src={userImg} alt="Avatar" />
                <input ref={fileInput => this.fileInput = fileInput } style={{ display: 'none' }} type="file" onChange={this.handleSelectPhoto} />
                <Icon className="add-photo" link name="plus" size="large" onClick={() => { this.fileInput.click() }} />
                <h3 className="add-photo">Add Photo</h3>
                <Icon id="save-checkmark" link name="checkmark" size="large" onClick={() => { this.handleUploadPhoto() }} />
                <h3 className="save-photo">Save Photo</h3>
              </div>
              <div id="side-menu">
                <a href="#" name="active" onClick={this.handleActiveClick} >Active</a>
                <a href="#" name="accomplishments" onClick={this.handleAccomplishmentsClick} >Accomplishments</a>
              </div>

            </Grid.Column>
            <Grid.Column className="goalscolumn" stretched width={12}>
              {active ? <h1 style={{ textAlign: 'center' }}>Active Goals</h1> : <h1 style={{ textAlign: 'center' }}>Accomplishments</h1>}
              {active ? <Goal userId={userId} /> : <Accomplishments goals={goals} size={size} open={open} goalIDtoDelete={goalIDtoDelete} showDeleteAccomplishmentModal={this.showDeleteAccomplishmentModal} closeDeleteAccomplishmentModal={this.closeDeleteAccomplishmentModal} handleDeleteAccomplishment={this.handleDeleteAccomplishment} closeModalAndDelete={this.closeModalAndDelete} />}
            </Grid.Column>
          </Grid>
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
