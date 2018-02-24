import React, { Component } from 'react'
import { Card, Icon, Image, Button, Form, Menu, Input } from 'semantic-ui-react'

import CompetitionsPopUp from './CompetitionsPopUp.jsx'
import axios from 'axios'

// Components
import MenuBar from './MenuBar.jsx'
import SideMenu from './SideMenu.jsx'

const ROOT_URL = 'http://localhost:3000'

class UserHome extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goalTitle: '',
      goalDesc: '',
      goals: []
    }
    this.handleGoalTitleChange = this.handleGoalTitleChange.bind(this)
    this.hanldeGoalDescChange = this.hanldeGoalDescChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.fetchGoals()
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

  handleSubmit (e) {
    e.preventDefault()

    const copyOfGoals = [...this.state.goals]
    copyOfGoals.push(this.state.goalTitle)

    axios.post(ROOT_URL + '/api/goal', {
      goal: this.state.goalTitle
    })
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
      })

    this.setState({
      goals: copyOfGoals,
      goalTitle: ''
    })
  }

  fetchGoals () {
    axios.get(ROOT_URL + '/api/goal')
      .then((response) => {
        this.setState({
          goals: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    const { activeItem } = this.state || {}
    return (
      <div>
        <MenuBar />
        <Card>
          <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
          <Card.Content>
            <Card.Header>
              Manny
            </Card.Header>
            <Card.Meta>
              <span className="date">
                Joined in 2018
              </span>
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

        <SideMenu
          goals={this.state.goals}
        />

        <br /><br />

        <form onSubmit={this.handleSubmit} style={{ width: 290 }} ref="commentForm" className="ui form">
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
          <button type="submit" className="ui button">Submit</button>
        </form>

        <br /><br />

      </div>
    )
  }
}

export default UserHome
