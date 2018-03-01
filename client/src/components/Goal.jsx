import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'

// Components
import MenuBar from './MenuBar.jsx'
import GoalTable from './GoalTable.jsx'
import AddGoal from './AddGoal.jsx'

class Goal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goal: '',
      category: '',
      target: '',
      size: '',
      startDate: moment(),
      endDate: moment(),
      notes: '',
      goals: [],
      open: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.handleDropDownChange = this.handleDropDownChange.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.handleRemoveGoal = this.handleRemoveGoal.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
    this.close = this.close.bind(this)
    this.show = this.show.bind(this)
  }

  componentDidMount () {
    this.fetchGoals()
  }

  handleChange (e, { name, value }) {
    this.setState({
      [name]: value
    })
  }

  handleDropDownChange (e, { value }) {
    this.setState({
      category: value
    })
  }

  handleStartDateChange (date) {
    this.setState({
      startDate: date
    })
  }

  handleEndDateChange (date) {
    this.setState({
      endDate: date
    })
  }

  handleTextAreaChange (e, { value }) {
    this.setState({
      notes: value
    })
  }

  handleSubmit () {
    const {
      goal,
      target,
      category,
      startDate,
      endDate,
      notes
    } = this.state

    axios
      .post('/api/goal', {
        goal,
        target,
        category,
        startDate,
        endDate,
        notes
      })
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
      })

    this.close()

    this.setState({
      goal: '',
      target: '',
      category: '',
      notes: '',
      startDate: moment(),
      endDate: moment()
    })
  }

  handleRemoveGoal (id) {
    axios
      .delete(`/api/goal/${id}`)
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
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

  show (size) {
    this.setState({
      size,
      open: true
    })
  }

  close () {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <div>

        <MenuBar />

        <h1>My Goals</h1>

        <br />

        <AddGoal
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDropDownChange={this.handleDropDownChange}
          handleStartDateChange={this.handleStartDateChange}
          handleEndDateChange={this.handleEndDateChange}
          handleTextAreaChange={this.handleTextAreaChange}
          goal={this.state.goal}
          target={this.state.target}
          category={this.state.category}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          notes={this.state.notes}
          close={this.close}
          open={this.state.open}
          show={this.show}
          size={this.state.size}
        />

        <br /><br />

        <GoalTable
          goals={this.state.goals}
          handleRemoveGoal={this.handleRemoveGoal}
          handleTableCellClick={this.handleTableCellClick}
        />

      </div>
    )
  }
}

export default Goal
