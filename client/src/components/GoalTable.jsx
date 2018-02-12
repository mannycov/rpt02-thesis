import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const GoalTable = ({ goals, handleRemoveGoal }) => (
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
            <Table.Cell><Link to={`/goal/${goal._id}`}>{goal.goals_name}</Link></Table.Cell>
            <Table.Cell textAlign="left"><Link to={`/goal/${goal._id}`}>{goal.target}</Link></Table.Cell>
            <Table.Cell><Link to={`/goal/${goal._id}`}>{goal.category}</Link></Table.Cell>
            <Table.Cell><Link to={`/goal/${goal._id}`}>{goal.start_date.slice(0, 10)}</Link></Table.Cell>
            <Table.Cell><Link to={`/goal/${goal._id}`}>{goal.end_date.slice(0, 10)}</Link></Table.Cell>
            <Table.Cell><Link to={`/goal/${goal._id}`}>{goal.notes}</Link></Table.Cell>
            <td><input type="button" onClick={() => { handleRemoveGoal(goal._id) }} value="&times;" /></td>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <br /><br /><br />
  </div>
)

export default GoalTable
