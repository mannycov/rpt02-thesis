import React from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'

const DeleteAccomplishments = props => (
  <div>
    <Modal open={props.open} onClose={props.closeDeleteAccomplishmentModal}>
      <Modal.Header>
          Delete Accomplishment
      </Modal.Header>
      <Modal.Content>
        <div>Are you sure you want to delete your accomplishment?</div>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => { props.closeDeleteAccomplishmentModal() }} color="red" inverted>
          <Icon name="remove" /> No
        </Button>
        <Button onClick={() => { props.closeModalAndDelete() }} color="green" inverted>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
)

export default DeleteAccomplishments
