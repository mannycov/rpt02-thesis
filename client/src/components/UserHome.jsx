import React, { Component } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'

import axios from 'axios'

// Components
import MenuBar from './MenuBar.jsx'
import SideMenu from './SideMenu.jsx'
import CardComponent from './Card.jsx'
import App from './App.jsx'
// import AddGoal from './AddGoal.jsx'

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

        <Grid columns={3}>

          {/* Row 1 */}
          <Grid.Row>
            <Grid.Column>
              <CardComponent />
            </Grid.Column>
            <Grid.Column>
              <App />
            </Grid.Column>
            <Grid.Column>
              <h1>Trophies List</h1>
            </Grid.Column>
          </Grid.Row>

          {/* Row 2 */}
          <Grid.Row>
            <Grid.Column>
              <Button>
                + Add Goal
              </Button>
            </Grid.Column>
          </Grid.Row>

          {/* Row 3 */}
          <Grid.Row>
            <Grid.Column width={8}>
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
            </Grid.Column>
          </Grid.Row>

          {/* Row 4 */}
          <Grid.Row>
            <Grid.Column width={8}>
              <SideMenu
                goals={this.state.goals}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/><br/>
      </div>
    )
  }
}

export default UserHome
