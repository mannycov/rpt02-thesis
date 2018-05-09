import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import InputMoment from 'input-moment'

const EditGoalEndDate = props => (
  <div>
    <Modal size={props.size} open={props.openEditEndDateForm} onClose={props.closeEditEndDateForm}>
      <Modal.Header>
          Edit Goal's End Date
      </Modal.Header>
      <Modal.Content>
        <Form onSubmit={props.handleEditGoalEndDate}>
          <Form.Input
            type="text"
            value={props.updatedEndDate.format('MMMM DD YYYY')}
            readOnly
            fluid
            label="Choose End Date"
            placeholder="End Date"
          />
          <InputMoment
            moment={props.updatedEndDate}
            onChange={props.handleUpdatedEndDateChange}
          />
          <Button primary>Save</Button>
          <Button secondary onClick={() => { props.closeEditEndDateForm() }}>Cancel</Button>
        </Form>
      </Modal.Content>
    </Modal>
  </div>
)

export default EditGoalEndDate
