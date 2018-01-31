import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CompetitionsPopUp from './CompetitionsPopUp.jsx'
import CompetitionsFullPage  from './CompetitionsPopUp.jsx'

class SideMenu extends Component {
  handleItemClick (name) {
    this.setState({ activeItem: name })
  }
  render (props) {
    let SideMenueCompClick = this.props.competititonsHandleClick;
    console.log('props in the sidemenu component', this.props.isHidden)
    const { activeItem } = this.state || {}
    return <Menu style={{ width: 290 }} vertical>
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
      <Menu.Item onClick={() => SideMenueCompClick()}>
        {this.props.isHidden === false ? <CompetitionsFullPage /> :
        <CompetitionsPopUp
          goals={this.props.goals}
          competititonsHandleClick={this.props.competititonsHandleClick}
          isHidden={this.props.isHidden} />}
      </Menu.Item>
      <Link to="/trophies">
        <Menu.Item>
          <Menu.Header>Trophies</Menu.Header>
        </Menu.Item>
      </Link>
    </Menu>
  }
}

export default SideMenu
