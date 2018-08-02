import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// Components
import DeleteAccomplishments from './DeleteAccomplishments.jsx'

class Accomplishments extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { goals } = this.props
    return (
      <div>
        {goals.map((goal) => {
          if (goal.complete) {
            return (
              <Card
                className="trophy"
                key={goal._id}
              >
                <div className="ui tiny image" >
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Twemoji2_1f3c6.svg" title="First Place" size="small" />
                </div>
                <div className="content">
                  <Link
                    to={{
                      pathname: `/goal/${goal._id}`,
                      state: { goal }
                    }}
                  >
                    <div className="header">{goal.goals_name}</div>
                  </Link>
                  <Icon className="removegoal" link name="remove" size="large" onClick={() => { this.props.showDeleteAccomplishmentModal('large', goal._id) }} />
                  <DeleteAccomplishments open={this.props.open} closeDeleteAccomplishmentModal={this.props.closeDeleteAccomplishmentModal} handleDeleteAccomplishment={this.props.handleDeleteAccomplishment} closeModalAndDelete={this.props.closeModalAndDelete} />
                </div>
              </Card>
            )
          }
        })}
      </div>
    )
  }
}

export default Accomplishments
