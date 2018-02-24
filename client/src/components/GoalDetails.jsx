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

        <h1>Today is: {new Date().toDateString()}</h1>

        <h3>Graph Here:</h3>

        <br /><br />

        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Weight</label>
              <Input
                fluid
                placeholder="0lbs."
              />
            </Form.Field>
            <Form.Field>
              <label>Reps</label>
              <Input
                fluid
                placeholder="0"
              />
            </Form.Field>
            <Form.Field>
              <label>Sets</label>
              <Input
                fluid
                placeholder="0"
              />
            </Form.Field>
            <Form.Field>
              <label>Target</label>
              <Input
                fluid
                placeholder=""
              />
            </Form.Field>
          </Form.Group>
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
              <Table.HeaderCell rowSpan="2">Weight</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Reps</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Sets</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Target</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Check In</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>A goal</Table.Cell>
              <Table.Cell>155 lbs.</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>155 lb.s</Table.Cell>
              <Table.Cell>{this.renderIcon()}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
    )
  }
}

export default GoalDetails
