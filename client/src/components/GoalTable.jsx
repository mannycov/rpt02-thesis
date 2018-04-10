import React, { Component } from 'react'
import { table, Modal, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Goaltable extends Component {
  constructor () {
    super()
    this.renderGoalName = this.renderGoalName.bind(this)
    this.renderWeightGoalTarget = this.renderWeightGoalTarget.bind(this)
    this.renderCardioGoalTarget = this.renderCardioGoalTarget.bind(this)
    this.renderGoalTarget = this.renderGoalTarget.bind(this)
  }

  renderGoalName (goal) {
    return (
      <Link to={{
        pathname: `/goal/${goal._id}`,
        state: { goal }
      }}
      >
        {goal.goals_name}
      </Link>
    )
  }

  renderWeightGoalTarget (goal) {
    if (goal.weightTarget && goal.repTarget) {
      return (
        `${goal.weightTarget} lbs. ${goal.repTarget} reps`
      )
    } else if (goal.weightTarget && goal.repTarget === null) {
      return (
        `${goal.weightTarget} lbs.`
      )
    } else if (goal.weightTarget === null && goal.repTarget) {
      return (
        `${goal.repTarget} reps`
      )
    }
  }

  renderCardioGoalTarget (goal) {
    if (goal.minTarget && goal.secsTarget) {
      return (
        `${goal.minTarget}:${goal.secsTarget}`
      )
    } else if (goal.minTarget === null && goal.secsTarget) {
      return (
        `00:${goal.secsTarget}`
      )
    } else if (goal.minTarget && goal.secsTarget === null) {
      return (
        `${goal.minTarget}:00`
      )
    }
  }

  renderGoalTarget (goal) {
    if (goal.category === 'Strength') {
      return (
        <Link to={{
          pathname: `/goal/${goal._id}`,
          state: { goal }
        }}
        >
          {this.renderWeightGoalTarget(goal)}
        </Link>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Link to={{
          pathname: `/goal/${goal._id}`,
          state: { goal }
        }}
        >
          {this.renderCardioGoalTarget(goal)}
        </Link>
      )
    } else if (goal.category === 'Habit') {
      return (
        <Link to={{
          pathname: `/goal/${goal._id}`,
          state: { goal }
        }}
        >
          {goal.daysTarget} days
        </Link>
      )
    }
  }

  render () {
    const { goals, handleRemoveGoal } = this.props
    return (
      <div>
        <table className="goaltable">
          <thead>
            <tr>
              <th>Goal</th>
              <th>Target</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {goals.map((goal) => {
              if (!goal.complete) {
                return (
                  <tr key={goal._id}>
                    <td>
                      {this.renderGoalName(goal)}
                    </td>
                    <td>
                      {this.renderGoalTarget(goal)}
                    </td>
                    <td>
                      <Link to={{
                        pathname: `/goal/${goal._id}`,
                        state: { goal }
                      }}
                      >
                        {goal.category}
                      </Link>
                    </td>
                    <td>
                      <Link to={{
                        pathname: `/goal/${goal._id}`,
                        state: { goal }
                      }}
                      >
                        {goal.start_date ? goal.start_date.slice(0, 10) : ''}
                      </Link>
                    </td>
                    <td>
                      <Link to={{
                        pathname: `/goal/${goal._id}`,
                        state: { goal }
                      }}
                      >
                        {goal.end_date ? goal.end_date.slice(0, 10) : ''}
                      </Link>
                    </td>
                    <td>
                      <Link to={{
                        pathname: `/goal/${goal._id}`,
                        state: { goal }
                      }}
                      >
                        {goal.notes}
                      </Link>
                    </td>
                    <Icon className="removegoal" link name="remove" size="large" onClick={() => { this.props.show('large', goal._id) }} />
                    <Icon className="editgoal" link name="pencil" size="large" />
                    {/* <td className="remove-goal" onClick={() => { this.props.show('large', goal._id) }}> value="&times;" </td> */}
                    <Modal
                      open={this.props.openConfirm}
                      onClose={this.props.closeCancel}
                    >
                      <Modal.Header>
                    Delete Your Goal
                      </Modal.Header>
                      <Modal.Content>
                        <div>Are you sure you want to delete your goal?</div>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button onClick={() => { this.props.closeCancel() }} color="red" inverted>
                          <Icon name="remove" /> No
                        </Button>
                        <Button onClick={() => { this.props.closeConfirm() }} color="green" inverted>
                          <Icon name="checkmark" /> Yes
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <br /><br /><br />
      </div>
    )
  }
}

export default Goaltable
