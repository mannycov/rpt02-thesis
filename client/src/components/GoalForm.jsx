import React, { Component } from 'react'
import { Form, Button, Dropdown, TextArea, Icon } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

// data
import categoryData from '../data/categories'

class GoalForm extends Component {
  constructor (props) {
    super(props)

    this.state = { categories: categoryData }
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>

          {/* Input Fields */}
          <Form.Group>
            <Form.Input
              width="3"
              fluid
              label="Goal"
              name="goal"
              value={this.props.goal}
              onChange={this.props.handleChange}
              placeholder="(e.g. lose 10lbs.)"
            />
            <Form.Input
              width="3"
              fluid
              label="Target"
              name="target"
              value={this.props.target}
              onChange={this.props.handleChange}
              placeholder="(e.g. 175lbs.)"
            />
          </Form.Group>

          {/* Dropdown */}
          <Form.Group inline>
            <label>Categories</label>
            <Dropdown
              onChange={this.props.handleDropDownChange}
              selection
              value={this.props.category}
              label="Categories"
              options={this.state.categories}
              placeholder="Categories"
            />
          </Form.Group>

          {/* Dates */}
          <Form.Group inline>
            <label>Start Date</label>

            <Icon name="calendar" color="blue" size="large" />

            <DatePicker
              selected={this.props.startDate}
              onChange={this.props.handleStartDate}
            />

            <label>End Date</label>

            <Icon name="calendar" color="blue" size="large" />

            <DatePicker
              selected={this.props.endDate}
              onChange={this.props.handleEndDate}
            />
          </Form.Group>

          {/* Notes */}
          <TextArea
            width="6"
            label="Notes"
            value={this.props.notes}
            onChange={this.props.handleTextArea}
            placeholder="Additional info here..."
          />

          {/* Submit */}
          <Button primary>Add +</Button>
          <Button secondary onClick={() => { this.props.close() }}>Cancel</Button>
        </Form>

      </div>
    )
  }
}

export default GoalForm
