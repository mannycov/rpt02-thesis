import React, { Component } from 'react'
import { Form, Input, Table, Checkbox, Icon } from 'semantic-ui-react'

// Components
import MenuBar from './MenuBar.jsx'

class GoalDetails extends Component {
  constructor (props) {
    super(props)

    this.state = { checked: false }
    this.toggle = this.toggle.bind(this)
    this.renderIcon = this.renderIcon.bind(this)
  }

  toggle () {
    this.setState({
      checked: !this.state.checked
    })
  }

  renderIcon () {
    if (this.state.checked) {
      return (
        <div>
          <Icon color="green" name="checkmark" size="large" />
        </div>
      )
    }
  }

  render () {
    return (
      <div>

        <MenuBar />

        <h1>Goal Id: </h1>

        <h3>Today is: {new Date().toDateString()}</h3>

        <h4>Graph Here:</h4>

        <br /><br />

        <h3>Date Here:</h3>

        <br /><br />

        <Form>
          <Input
            fluid
            label="Weight"
            placeholder="0lbs."
          />
          <Input
            fluid
            label="Reps"
            placeholder="0"
          />
          <Input
            fluid
            label="Sets"
            placeholder="0"
          />
          <Input
            fluid
            label="Target"
            placeholder="0 sec."
          />
          <Checkbox
            toggle
            label={<label>Click to check in for the day</label>}
            onClick={() => { this.toggle() }}
          />
        </Form>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Goal</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Target</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>A goal</Table.Cell>
              <Table.Cell>Details</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
    )
  }
}

export default GoalDetails
