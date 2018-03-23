import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Statistic, Form, Popup } from 'semantic-ui-react'
import * as V from 'victory'
import moment from 'moment'
import InputMoment from 'input-moment'

class CheckInForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goal: this.props.goal,
      weight: this.props.weight,
      reps: this.props.reps,
      sets: this.props.sets,
      handleChange: this.props.handleChange
    }
    this.renderFormInputs = this.renderFormInputs.bind(this)
    this.checkSecs = this.checkSecs.bind(this)
  }

  checkSecs () {
    const { secs } = this.props
    if (secs >= 60 || secs < 0) {
      alert('Please Enter a Valid Input')
    }
  }

  renderFormInputs () {
    const {
      goal,
      weight,
      reps,
      sets,
      handleChange
    } = this.state
    const { date, handleCheckInCalChange } = this.props
    if (goal.category === 'Strength') {
      return (<Form.Group>
        <Popup
          on="click"
          trigger={
            <Form.Input
              width="3"
              type="text"
              value={date.format('MMMM Do YYYY')}
              readOnly fluid
              label="Date"
              placeholder="Date"
            />
          }
          content={
            <InputMoment
              width="3"
              moment={date}
              onChange={handleCheckInCalChange}
              minStep={5}
            />
          }
          position="bottom center"
        />
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
      </Form.Group>)
    } else if (goal.category === 'Cardio') {
      return (
        <Form.Group>
          <Popup
            on="click"
            trigger={
              <Form.Input
                width="3"
                type="text"
                value={date.format('MMMM Do YYYY')}
                readOnly fluid
                label="Date"
                placeholder="Date"
              />
            }
            content={
              <InputMoment
                width="3"
                moment={date}
                onChange={handleCheckInCalChange}
                minStep={5}
              />
            }
            position="bottom center"
          />
          <Form.Input
            width="3"
            fluid
            label="Minutes"
            name="min"
            value={this.props.min}
            onChange={handleChange}
            placeholder="00"
          />
          <Form.Input
            width="3"
            fluid
            label="Seconds"
            name="secs"
            value={this.props.secs}
            onChange={handleChange}
            placeholder="00"
          />
        </Form.Group>)
    } else if (goal.category === 'Habit') {
      return (
        <Form.Group>
          <Popup
            on="click"
            trigger={
              <Form.Input
                width="3"
                type="text"
                value={date.format('MMMM Do YYYY')}
                readOnly fluid
                label="Date"
                placeholder="Date"
              />
            }
            content={
              <InputMoment
                width="3"
                moment={date}
                onChange={handleCheckInCalChange}
                minStep={5}
              />
            }
            position="bottom center"
          />
        </Form.Group>)
    }
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>

          {/* Input Fields */}
          {this.renderFormInputs()}
          {this.checkSecs()}

          {/* Submit */}
          <Button primary>Add +</Button>
          <Button secondary onClick={() => { this.props.close() }}>Cancel</Button>
        </Form>

      </div>
    )
  }
}

export default CheckInForm
