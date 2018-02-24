import React, { Component } from 'react'
import { Table, Checkbox, Icon } from 'semantic-ui-react'
import axios from 'axios'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import moment from 'moment'

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
      date: new Date().toDateString(),
      weight: '',
      reps: '',
      sets: '',
      min: '',
      secs: '',
      size: '',
      open: false
    }
    this.toggle = this.toggle.bind(this)
    this.show = this.show.bind(this)
    this.close = this.close.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchCheckIns = this.fetchCheckIns.bind(this)
    this.handleRemoveCheckIn = this.handleRemoveCheckIn.bind(this)
    this.renderIcon = this.renderIcon.bind(this)
    this.renderHeaderRow = this.renderHeaderRow.bind(this)
    this.renderTableRow = this.renderTableRow.bind(this)
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
      date,
      weight,
      reps,
      sets,
      min,
      secs
    } = this.state

    // check if number properties are appropriate values
    // check if secs properties are appropriate
    // if secs >= 60 alert the user tht input is invalid

    axios
      .post('/api/checkin/', {
        goalId,
        date,
        weight,
        reps,
        sets,
        min,
        secs
      })
      .then((response) => {
        this.fetchCheckIns()
      })
      .catch((error) => {
        console.log(error)
      })

    this.close()

    this.setState({
      date,
      weight: '',
      reps: '',
      sets: '',
      min: '',
      secs: ''
    })
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

  handleRemoveCheckIn (id) {
    axios
      .delete(`/api/checkin/${id}`)
      .then((response) => {
        this.fetchCheckIns()
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
          <Table.HeaderCell rowSpan="2">Date</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Remove</Table.HeaderCell>
        </Table.Row>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Date</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Time</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Remove</Table.HeaderCell>
        </Table.Row>
      )
    } else if (goal.category === 'Strength') {
      return (
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Date</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Weight</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Reps</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Sets</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Remove</Table.HeaderCell>
        </Table.Row>
      )
    }
  }

  renderTableRow () {
    const {
      today,
      goal,
      checkins
    } = this.state

    if (goal.category === 'Habit') {
      return (
        <Table.Body>
          {checkins.map(checkin => (
            <Table.Row key={checkin._id}>
              <Table.Cell>{checkin.date}</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
              <td><input type="button" onClick={() => { this.handleRemoveCheckIn(checkin._id) }} value="&times;" /></td>
            </Table.Row>
          ))}
        </Table.Body>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Table.Body>
          {checkins.map(checkin => (
            <Table.Row key={checkin._id}>
              <Table.Cell>{checkin.date}</Table.Cell>
              <Table.Cell>{`${checkin.min}:${checkin.secs}`}</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
              <td><input type="button" onClick={() => { this.handleRemoveCheckIn(checkin._id) }} value="&times;" /></td>
            </Table.Row>
          ))}
        </Table.Body>
      )
    } else if (goal.category === 'Strength') {
      return (
        <Table.Body>
          {checkins.map(checkin => (
            <Table.Row key={checkin._id}>
              <Table.Cell>{checkin.date}</Table.Cell>
              <Table.Cell>{checkin.weight} lbs.</Table.Cell>
              <Table.Cell>{checkin.reps}</Table.Cell>
              <Table.Cell>{checkin.sets}</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
              <td><input type="button" onClick={() => { this.handleRemoveCheckIn(checkin._id) }} value="&times;" /></td>
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
      date,
      weight,
      reps,
      sets,
      min,
      secs,
      size,
      open,
      checkins
    } = this.state
    return (

      <div>
 {console.log('sate of the goals', this.props.location.state.goal)}
        <MenuBar />

        <h1 style={{ textAlign: 'center' }}>{today}</h1>

        <h2 style={{ textAlign: 'center' }}>{goal.goals_name}</h2>

        <h2 style={{ textAlign: 'center' }}>Target: {goal.target}</h2>

        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' }
            }}
            data={
              checkins
            }
            x='date'
            y='min'
          />
        </VictoryChart>

        <br /><br />

        <AddCheckIn
          goal={goal}
          goalId={goalId}
          date={date}
          weight={weight}
          reps={reps}
          sets={sets}
          min={min}
          secs={secs}
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
          {this.renderTableRow()}
        </Table>

      </div>
    )
  }
}

export default CheckIn
