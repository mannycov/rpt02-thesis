import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  render (props) {
    const { activeItem } = this.state || {}
    console.log('my prizzle', this.props.isHidden)
    return (
      <div>
        <Menu secondary>
          <Link to="/userhome">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Link to="/">
              <button type="submit" className="ui button">Logout</button>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default MenuBar
