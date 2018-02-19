import React, { Component } from 'react'
import { Table, Checkbox, Icon } from 'semantic-ui-react'
import axios from 'axios'

// Components
import MenuBar from './MenuBar.jsx'
import AddCheckIn from './AddCheckIn.jsx'

class CheckIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: false,
      today: new Date().toDateString(),
      goal: this.props.location.state.goal,
      goalId: this.props.match.params.id,
      checkins: [],
      weight: '',
      reps: '',
      sets: '',
      time: '',
      size: '',
      open: false
    }
    this.toggle = this.toggle.bind(this)
    this.show = this.show.bind(this)
    this.close = this.close.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchCheckIns = this.fetchCheckIns.bind(this)
    this.renderIcon = this.renderIcon.bind(this)
    this.renderHeaderRow = this.renderHeaderRow.bind(this)
    this.renderBodyRow = this.renderBodyRow.bind(this)
  }

  componentDidMount () {
    this.fetchCheckIns()
  }

  toggle () {
    const { checked } = this.state

    this.setState({
      checked: !checked
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

  handleChange (e, { name, value }) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit () {
    const {
      goalId,
      weight,
      reps,
      sets,
      time
    } = this.state

    axios
      .post('/api/checkin/', {
        goalId,
        weight,
        reps,
        sets,
        time
      })
      .then((response) => {
        this.fetchCheckIns()
      })
      .catch((error) => {
        console.log(error)
      })

    this.close()
  }

  fetchCheckIns () {
    const { goalId } = this.state
    axios
      .get(`/api/checkin/${goalId}`)
      .then((response) => {
        this.setState({
          checkins: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderIcon () {
    const { checked } = this.state
    if (checked) {
      return (
        <Icon color="green" name="checkmark" size="large" />
      )
    }
  }

  renderHeaderRow() {
    const { goal } = this.state

    if (goal.category === 'Habit') {
      return (
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Today's Date</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
        </Table.Row>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Today's Date</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Time</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
        </Table.Row>
      )
    } else if (goal.category === 'Strength') {
      return (
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Today's Date</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Weight</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Reps</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Sets</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
        </Table.Row>
      )
    }
  }

  renderBodyRow () {
    const {
      today,
      goal,
      checkins,
      weight,
      reps,
      sets,
      time
    } = this.state

    if (goal.category === 'Habit') {
      return (
        <Table.Body>
          {checkins.map(checkin => (
            <Table.Row>
              <Table.Cell>{today}</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Table.Body>
          {checkins.map(checkin => (
            <Table.Row>
              <Table.Cell>{today}</Table.Cell>
              <Table.Cell>{checkin.time}</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      )
    } else if (goal.category === 'Strength') {
      return (
        <Table.Body>
          {checkins.map(checkin => (
            <Table.Row>
              <Table.Cell>{today}</Table.Cell>
              <Table.Cell>{checkin.weight}.</Table.Cell>
              <Table.Cell>{checkin.reps}</Table.Cell>
              <Table.Cell>{checkin.sets}</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      )
    }
  }

  render () {
    const {
      today,
      goal,
      goalId,
      weight,
      reps,
      sets,
      time,
      size,
      open
    } = this.state
    return (
      <div>

        <MenuBar />

        <h1>Today is: {today}</h1>

        <h2>{goal.goals_name}</h2>

        <h2>Target: {goal.target}</h2>

        <h3>Graph Here:</h3>

        <br /><br />

        <AddCheckIn
          goal={goal}
          goalId={goalId}
          weight={weight}
          reps={reps}
          sets={sets}
          time={time}
          size={size}
          open={open}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          show={this.show}
          close={this.close}
        />

        <br /><br />

        <Checkbox
          toggle
          label={<label>Click to check in for the day</label>}
          onClick={() => { this.toggle() }}
        />

        <Table>
          <Table.Header>
            {this.renderHeaderRow()}
          </Table.Header>
          {this.renderBodyRow()}
        </Table>

      </div>
    )
  }
}

export default CheckIn
