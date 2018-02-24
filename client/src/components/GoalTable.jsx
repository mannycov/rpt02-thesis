import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const GoalTable = props => (
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
        {props.goals.map(goal => (
          <Table.Row key={goal._id}>
            <Table.Cell>{goal.goals_name}</Table.Cell>
            <Table.Cell onClick={() => { props.handleTableCellClick() }} textAlign="left">{goal.target}</Table.Cell>
            <Table.Cell onClick={() => { props.handleTableCellClick() }}>{goal.category}</Table.Cell>
            <Table.Cell onClick={() => { props.handleTableCellClick() }}>{goal.start_date.slice(0, 10)}</Table.Cell>
            <Table.Cell onClick={() => { props.handleTableCellClick() }}>{goal.end_date.slice(0, 10)}</Table.Cell>
            <Table.Cell onClick={() => { props.handleTableCellClick() }}>{goal.notes}</Table.Cell>
            <td><input type="button" onClick={() => { props.handleRemoveGoal(goal._id) }} value="&times;" /></td>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <br /><br /><br />
  </div>
)

export default GoalTable
