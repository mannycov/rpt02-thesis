import React from 'react'
import { Table } from 'semantic-ui-react'

const GoalTable = props => (
  <div>
    <Table celled structured>

      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Goal</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Target</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Category</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.goals.map(goal => (
          <Table.Row key={goal._id}>
            <Table.Cell>{goal.goals_name}</Table.Cell>
            <Table.Cell textAlign='right'>{goal.target}</Table.Cell>
            <Table.Cell>{goal.category}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <br/><br/><br/>
  </div>
)

export default GoalTable
