import React, { Component } from 'react'
import { Form, Icon, TextArea, Select, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'
// import 'react-datepicker/dist/react-datepicker.css'

// Components
import MenuBar from './MenuBar.jsx'
import GoalTable from './GoalTable.jsx'

// data
import categoryData from '../data/categories'

const ROOT_URL = 'http://localhost:3000'

class Goal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goal: '',
      category: '',
      target: '',
      submittedGoal: '',
      submittedCategory: '',
      submittedTarget: '',
      startDate: moment(),
      goals: [],
      categories: categoryData
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
  }

  componentDidMount () {
    this.fetchGoals()
  }

  handleChange (e, { name, value }) {
    this.setState({
      [name]: value
    })
  }

  handleDateChange (date) {
    this.setState({
      startDate: date
    })
  }

  handleSubmit () {
    const { goal, target, goals } = this.state

    const copyOfGoals = [...goals]

    copyOfGoals.push(goal)

    axios
      .post(ROOT_URL + "/api/goal", {
        goal: this.state.goal
      })
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
      })

    this.setState({
      submittedGoal: goal,
      submittedTarget: target,
      goal: '',
      target: '',
      goals: copyOfGoals
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

  render () {
    const {
      goal,
      submittedGoal,
      target,
      submittedTarget
    } = this.state
    return (
      <div>

        <MenuBar />

        <h1>My Goals</h1>

        <br />

        <h3>Create a Goal</h3>

        <Form onSubmit={this.handleSubmit}>

          {/* Input Fields */}
          <Form.Group>
            <Form.Input width="2" fluid label="Goal" name="goal" value={goal} onChange={this.handleChange} placeholder="(e.g. lose 10lbs.)" />
            <Form.Input width="2" fluid label="Target" name="target" value={target} onChange={this.handleChange} placeholder="(e.g. 175lbs.)" />
            {/* Dropdown */}
            <Form.Field width="2" control={Select} label="Categories" options={this.state.categories} placeholder="Categories" />
          </Form.Group>

          {/* Dates */}
          <Form.Group inline>
            <label>Start Date</label>

            <Icon name="calendar" color="blue" size="large" />

            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />

            <label>End Date</label>

            <Icon name="calendar" color="blue" size="large" />

            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
          </Form.Group>

          {/* Notes */}
          <Form.Field width="6" control={TextArea} label="Notes" placeholder="Additional info here..." />

          {/* Submit */}
          <Button primary>Sumbit</Button>
        </Form>

        <strong>onChange:</strong>
        <pre>{JSON.stringify({ goal }, null, 2)}</pre>
        <pre>{JSON.stringify({ target }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedGoal }, null, 2)}</pre>
        <pre>{JSON.stringify({ submittedTarget }, null, 2)}</pre>

        <br /><br />

        <GoalTable
          goals={this.state.goals}
        />

      </div>
    )
  }
}

export default Goal
