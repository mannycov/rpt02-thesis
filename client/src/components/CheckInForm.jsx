import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class CheckInForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goal: this.props.goal,
      weight: this.props.weight,
      reps: this.props.reps,
      sets: this.props.sets,
      time: this.props.time,
      handleChange: this.props.handleChange
    }
    this.renderFormInputs = this.renderFormInputs.bind(this)
  }

  renderFormInputs () {
    const {
      goal,
      weight,
      reps,
      sets,
      time,
      handleChange
    } = this.state
    if (goal.category === 'Strength') {
      return (
        <Form.Group>
          <Form.Input
            width="3"
            fluid
            label="Weight"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="0 lbs."
          />
          <Form.Input
            width="3"
            fluid
            label="Reps"
            name="reps"
            value={reps}
            onChange={handleChange}
            placeholder="0"
          />
          <Form.Input
            width="3"
            fluid
            label="Sets"
            name="sets"
            value={sets}
            onChange={handleChange}
            placeholder="0"
          />
        </Form.Group>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Form.Group>
          <Form.Input
            width="3"
            fluid
            label="Time"
            name="time"
            value={time}
            onChange={handleChange}
            placeholder="0:00"
          />
        </Form.Group>
      )
    } else if (goal.category === 'Habit') {
      return (
        <Form.Group>
          <Form.Input
            width="3"
            fluid
            label="Time"
            name="time"
            value={time}
            onChange={handleChange}
            placeholder="0:00"
          />
        </Form.Group>
      )
    }
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>

          {/* Input Fields */}
          {this.renderFormInputs()}

          {/* Submit */}
          <Button primary>Add +</Button>
          <Button secondary onClick={() => { this.props.close() }}>Cancel</Button>
        </Form>

      </div>
    )
  }
}

export default CheckInForm
