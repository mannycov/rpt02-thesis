import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

// Components
import CheckInForm from './CheckInForm.jsx'

const AddCheckIn = props => (
  <div>
    <Button primary onClick={() => { props.show('large') }}>
      <i className="plus icon" />
          Check In
    </Button>

    <Modal open={props.open} onClose={props.close}>
      <Modal.Header>
          Enter Check In
      </Modal.Header>
      <Modal.Content>
        <CheckInForm
          goal={props.goal}
          close={props.close}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          min={props.min}
          secs={props.secs}
        />
      </Modal.Content>
    </Modal>
  </div>
)

export default AddCheckIn
