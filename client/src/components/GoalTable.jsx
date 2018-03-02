import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class GoalTable extends Component {
  constructor () {
    super()
    this.renderGoalName = this.renderGoalName.bind(this)
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

  renderGoalTarget (goal) {
    if (goal.category === 'Strength') {
      return (
        <Link to={{
          pathname: `/goal/${goal._id}`,
          state: { goal }
        }}
        >
          {goal.weightTarget} {goal.repTarget}
        </Link>
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Link to={{
          pathname: `/goal/${goal._id}`,
          state: { goal }
        }}
        >
          {goal.minTarget}:{goal.secsTarget}
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
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Goal</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Target</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Category</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Start Date</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">End Date</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Notes</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {goals.map(goal => (
              <Table.Row key={goal._id}>
                <Table.Cell>
                  {this.renderGoalName(goal)}
                </Table.Cell>
                <Table.Cell textAlign="left">
                  {this.renderGoalTarget(goal)}
                </Table.Cell>
                <Table.Cell>
                  <Link to={{
                    pathname: `/goal/${goal._id}`,
                    state: { goal }
                  }}
                  >
                    {goal.category}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={{
                    pathname: `/goal/${goal._id}`,
                    state: { goal }
                  }}
                  >
                    {goal.start_date ? goal.start_date.slice(0, 10) : ''}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={{
                    pathname: `/goal/${goal._id}`,
                    state: { goal }
                  }}
                  >
                    {goal.end_date ? goal.end_date.slice(0, 10) : ''}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={{
                    pathname: `/goal/${goal._id}`,
                    state: { goal }
                  }}
                  >
                    {goal.notes}
                  </Link>
                </Table.Cell>
                <td><input type="button" onClick={() => { handleRemoveGoal(goal._id) }} value="&times;" /></td>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <br /><br /><br />
      </div>
    )
  }
}

export default GoalTable
