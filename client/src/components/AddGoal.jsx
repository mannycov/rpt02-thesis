import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AddGoal extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
    this.show = this.show.bind(this)
    this.close = this.close.bind(this)
    this.handleYesClick = this.handleYesClick.bind(this)
  }

  show (size) {
    this.setState({
      size,
      open: true
    })
  }

  close () {
    this.setState({
      open: false
    })
  }

  handleYesClick () {
    console.log('handle yes clicked')
  }

  render () {
    const { open, size } = this.state

    return (
      <div>
        <Link to="/goal">
          <Button>
            <i className="plus icon" />
            Add a Goal
          </Button>
        </Link>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Create Your Goal
          </Modal.Header>
          <Modal.Content>
            <form className="ui form">
              <input 
                type="text"
                placeholder="Write something..."
              />
            </form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => { this.close() }}>
              Cancel
            </Button>
            <Button onClick={() => { this.handleYesClick() }} positive icon='plus icon' labelPosition='right' content='Add' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AddGoal
