import React from "react"
import { Button, Header, Icon, Modal, Statistic, Form } from 'semantic-ui-react'
import DefaultCompeteCategories from '../../DefaultCompeteCategories.js'

const CreateCompetition = ({
  compName,
  compCat,
  compStart,
  compEnd,
  handleCompName,
  handleCompCat,
  handleCompStart,
  handleCompEnd,
  competitionsSubmit
}) => (
  <Modal
    trigger={
      <Statistic>
        <Statistic.Value text>
          <i className="plus icon" />
        </Statistic.Value>
        <Statistic.Label>Create Competition</Statistic.Label>
      </Statistic>
    }
    closeIcon
  >
    <Header icon="plus icon" content="Create a Competition" />
    <Modal.Content>
      <Form
        onSubmit={(event) => { event.preventDefault(); competitionsSubmit(compName, compCat, compStart, compEnd); }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            onChange={handleCompName}
            label="Competition Name"
            placeholder="Competition Name"
          />
          <Form.Select
            fluid
            onChange={handleCompCat}
            label="Choose Category"
            options={DefaultCompeteCategories}
            placeholder="Category"
          />
          <Form.Input
            onChange={handleCompStart}
            fluid label="Choose Start Date"
            placeholder="Start Date"
          />
          <Form.Input
            onChange={handleCompEnd}
            fluid label="Choose End Date"
            placeholder="End Date"
          />
        </Form.Group>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> Cancel
      </Button>
      <Button
        color="green"
        type="submit"
      >
        <Icon name="checkmark" /> Add Competition
      </Button>
    </Modal.Actions>
  </Modal>
);

export default CreateCompetition
