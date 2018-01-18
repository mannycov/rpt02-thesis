import React, { Component } from 'react'
import { Card, Icon, Image, Button, Form, Menu, Input } from 'semantic-ui-react'
import MenuBar from './MenuBar.jsx'
import SideMenu from './SideMenu.jsx'

class UserHome extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state || {}
    return (
      <div>
        <MenuBar />
        <Card>
          <Image src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" />
          <Card.Content>
            <Card.Header>
              Manny
            </Card.Header>
            <Card.Meta>
              <span className="date">
                Joined in 2018
              </span>
            </Card.Meta>
            <Card.Description>
              Manny is some dude living in the Bay.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Form>
          <Form.Group widths="equal">
            <Form.Field placeholder="Enter your goal" label="Title" control="input" />
          </Form.Group>
          <Form.Field placeholder="Describe your gioal" label="Description" control="textarea" rows="4" />
          <Form.Field label="Submit" control="button">
            Submit
          </Form.Field>
        </Form>
        <SideMenu />
      </div>
    )
  }
}

export default UserHome
