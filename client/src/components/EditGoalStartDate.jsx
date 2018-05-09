import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import InputMoment from 'input-moment'

const EditGoalStartDate = props => (
  <div>
    <Modal size={props.size} open={props.openEditStartDateForm} onClose={props.closeEditStartDateForm}>
      <Modal.Header>
          Edit Goal's Start Date
      </Modal.Header>
      <Modal.Content>
        <Form onSubmit={props.handleEditGoalStartDate}>
          <Form.Input
            type="text"
            value={props.updatedStartDate.format('MMMM DD YYYY')}
            readOnly
            fluid
            label="Choose Start Date"
            placeholder="Start Date"
          />
          <InputMoment
            moment={props.updatedStartDate}
            onChange={props.handleUpdatedStartDateChange}
            minStep={5}
          />
          <Button primary>Save</Button>
          <Button secondary onClick={() => { props.closeEditStartDateForm() }}>Cancel</Button>
        </Form>
      </Modal.Content>
    </Modal>
  </div>
)

export default EditGoalStartDate
