import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'

class SideMenu extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state || {}
    return (
      <div>
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

export default SideMenu
