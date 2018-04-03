import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  render (props) {
    const { activeItem } = this.state || {}
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            as={Link}
            to="/userhome"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Link to="/">
              <button className="ui button logout" type="submit">Log out</button>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default MenuBar
