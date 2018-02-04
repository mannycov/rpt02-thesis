import React, { Component } from 'react'
import { Form, Icon, TextArea, Select, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

// Components
import MenuBar from './MenuBar.jsx'
import GoalTable from './GoalTable.jsx'

// data
import categoryData from '../data/categories'

class Goal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goal: '',
      category: '',
      submittedGoal: '',
      submittedCategory: '',
      startDate: moment(),
      categories: categoryData
    }
    // this.handleTitleChange = this.handleTitleChange.bind(this)
    // this.handleTargetChange = this.handleTargetChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
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
    const { goal } = this.state

    this.setState({
      submittedGoal: goal,
      goal: ''
    })
  }

  // handleTitleChange (e) {
  //   this.setState({
  //     title: e.target.value
  //   })
  // }

  // handleTargetChange (e) {
  //   this.setState({
  //     target: e.target.value
  //   })
  // }

  // handleSubmit (e) {
  //   e.preventDefault()

  //   console.log(this.state.title)

  //   const copyOfValues = [...this.state.values]

  //   copyOfValues.push(this.state.title, this.state.target)

  //   this.setState({
  //     title: '',
  //     target: '',
  //     values: copyOfValues
  //   }, () => { console.log(this.state.values) })
  // }

  render () {
    const { goal, submittedGoal } = this.state
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
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedGoal }, null, 2)}</pre>

        <br /><br />

        <GoalTable
          values={this.props.values}
        />

      </div>
    )
  }
}

export default Goal
