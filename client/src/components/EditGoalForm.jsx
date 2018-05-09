import React, { Component } from 'react'
import { Form, Button, Dropdown, TextArea, Popup } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import DatePicker from 'react-date-picker'
// import moment from 'moment'
// import InputMoment from 'input-moment'
import axios from 'axios'

// data
import categoryData from '../data/categories'

class EditGoalForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: categoryData,
      openDates: false
    }
    this.setDatesToOpen = this.setDatesToOpen.bind(this)
    this.renderTargets = this.renderTargets.bind(this)
  }

  setDatesToOpen () {
    this.setState({ openDates: true })
  }

  // renderDates () {
  //   const { openDates } = this.state
  //   if (openDates) {
  //     return (
  //       <Form.Group inline>
  //         <Popup
  //           on="click"
  //           trigger={
  //             <Form.Input
  //               type="text"
  //               value={this.props.updatedStartDate.format('MMMM DD YYYY')}
  //               readOnly
  //               fluid
  //               label="Choose Start Date"
  //               placeholder="Start Date"
  //             />
  //           }
  //           content={
  //             <InputMoment
  //               moment={this.props.updatedStartDate}
  //               onChange={this.props.handleUpdatedStartDateChange}
  //               minStep={5}
  //             />
  //           }
  //           position="right center"
  //         />
  //         <Popup
  //           on="click"
  //           trigger={
  //             <Form.Input
  //               type="text"
  //               value={this.props.updatedEndDate.format('MMMM DD YYYY')}
  //               readOnly
  //               fluid
  //               label="Choose End Date"
  //               placeholder="End Date"
  //             />
  //           }
  //           content={
  //             <InputMoment
  //               moment={this.props.updatedEndDate}
  //               onChange={this.props.handleUpdatedEndDateChange}
  //               minStep={5}
  //             />
  //           }
  //           position="right center"
  //         />
  //       </Form.Group>
  //     )
  //   }
  // }

  renderTargets () {
    const { goalToEdit } = this.props
    if (goalToEdit.category === 'Strength') {
      return (
        <Form.Group>
          <Form.Input
            width="3"
            fluid
            label="Weight"
            name="updatedWeightTarget"
            value={this.props.updatedWeightTarget}
            onChange={this.props.handleChange}
          />
          <Form.Input
            width="3"
            fluid
            label="Reps"
            name="updatedRepTarget"
            value={this.props.updatedRepTarget}
            onChange={this.props.handleChange}
          />
        </Form.Group>
      )
    } else if (goalToEdit.category === 'Cardio') {
      return (
        <Form.Group>
          <Form.Input
            width="3"
            fluid
            label="Minutes"
            name="updatedMinTarget"
            value={this.props.updatedMinTarget}
            onChange={this.props.handleChange}
          />
          <Form.Input
            width="3"
            fluid
            label="Seconds"
            name="updatedSecsTarget"
            value={this.props.updatedSecsTarget}
            onChange={this.props.handleChange}
          />
        </Form.Group>
      )
    } else if (goalToEdit.category === 'Habit') {
      return (
        <Form.Group>
          <Form.Input
            width="3"
            fluid
            label="Days"
            name="updatedDaysTarget"
            value={this.props.updatedDaysTarget}
            onChange={this.props.handleChange}
          />
        </Form.Group>
      )
    }
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.props.handleEditGoal}>
          {/* Input Fields */}
          <Form.Group inline>
            <Form.Input
              width="5"
              fluid
              label="Goal"
              name="updatedGoalTitle"
              value={this.props.updatedGoalTitle}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          {/* Dropdown */}
          <Form.Group>
            <Dropdown
              onChange={this.props.handleDropDownChange}
              selection
              value={this.props.goalToEdit.category}
              label="Categories"
              options={this.state.categories}
              placeholder="Categories"
            />
          </Form.Group>

          {/* Target Inputs */}
          {this.renderTargets()}
         
          {/* Notes */}
          <TextArea
            width="6"
            label="Notes"
            value={this.props.updatedNotes}
            onChange={this.props.handleUpdatedNotesChange}
            placeholder="Additional info here..."
          />

          {/* Submit */}
          <Button primary>Save</Button>
          <Button secondary onClick={() => { this.props.close() }}>Cancel</Button>
        </Form>

      </div>
    )
  }
}

export default EditGoalForm
