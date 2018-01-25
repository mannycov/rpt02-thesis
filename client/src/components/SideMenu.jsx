import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import CompetitionsPopUp from './CompetitionsPopUp.jsx'

class SideMenu extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state || {}
    return (
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Goals</Menu.Header>
        <Menu style={{ width: 290 }} vertical>
          <Menu.Item>
            <Menu.Header>Goals</Menu.Header>
            <Menu.Menu>
              {this.props.goals.map(goal => (
                <Menu.Item
                  name={goal.goals_name}
                  active={activeItem === goal}
                  onClick={this.handleItemClick}
                >
                  {goal.goals_name}
                </Menu.Item>
              ))}
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <CompetitionsPopUp />
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Trophies</Menu.Header>
          </Menu.Item>
        </Menu>
    )
  }
}

export default SideMenu
