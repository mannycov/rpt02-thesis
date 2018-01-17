import React, { Component } from 'react'
import { Card, Icon, Image, Button, Form, Menu, Input } from 'semantic-ui-react'

class UserHome extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state || {}
    return (
      <div>
        <Menu secondary>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
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
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Goals</Menu.Header>

            <Menu.Menu>
              <Menu.Item name="weight loss" active={activeItem === 'weight loss'} onClick={this.handleItemClick} />
              <Menu.Item name="meditation" active={activeItem === 'meditation'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Competitions</Menu.Header>

            <Menu.Menu>
              <Menu.Item name="lose 10 lbs." active={activeItem === 'lose 10 lbs.'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Trophies</Menu.Header>

          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default UserHome
