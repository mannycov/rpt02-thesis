import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const GoalTable = props => (
  <Table celled structured>

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Title</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Goal Target</Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>Check-Ins</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>1</Table.HeaderCell>
        <Table.HeaderCell>2</Table.HeaderCell>
        <Table.HeaderCell>3</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>Improve Mile Time</Table.Cell>
        <Table.Cell>Endurance</Table.Cell>
        <Table.Cell textAlign='right'>8:00</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign="center">
          <Icon color='red' name='close' size='large' />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>

      <Table.Row>
        <Table.Cell>Add 10lbs. to bench press</Table.Cell>
        <Table.Cell>Strength</Table.Cell>
        <Table.Cell textAlign='right'>125lbs.</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign="center">
          <Icon color='red' name='close' size='large' />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>

      <Table.Row>
        <Table.Cell>Increase Pull Ups</Table.Cell>
        <Table.Cell>Strength</Table.Cell>
        <Table.Cell textAlign='right'>10 reps x 3 sets</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign="center">
          <Icon color='red' name='close' size='large' />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>

      <Table.Row>
        <Table.Cell>Burn Daily Calories</Table.Cell>
        <Table.Cell>Body Composition</Table.Cell>
        <Table.Cell textAlign='right'>2500</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign="center">
          <Icon color='red' name='close' size='large' />
        </Table.Cell>
        <Table.Cell>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
)

export default GoalTable
