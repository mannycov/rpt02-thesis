import React from 'react'
import {Redirect} from 'react-router-dom'
import { Header, Modal, Statistic, Form } from 'semantic-ui-react'
import DefaultCompeteCategories from '../../DefaultCompeteCategories.js'

const CreateCompetition = ({
  isHidden,
  compName,
  compCat,
  compStart,
  compEnd,
  handleCompName,
  handleCompCat,
  handleCompStart,
  handleCompEnd,
  competitionsSubmit
}) => {
  return (
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
      <Header className="plus icon" content="Create a Competition" />
      <Modal.Content>{console.log('form props in create competition component', compName, compCat, compStart, compEnd, isHidden)}
        <Form
          onSubmit={competitionsSubmit.bind(null, compName, compCat, compStart, compEnd, isHidden)}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="text"
              onChange={handleCompName}
              label="Competition Name"
              placeholder="Competition Name"
            />

            <Form.Dropdown
              fluid
              type="text"
              label="Choose Category"
              selection
              options={DefaultCompeteCategories}
              placeholder="Category"
              onChange={handleCompCat}
            />
            <Form.Input
              type="text"
              onChange={handleCompStart}
              fluid
              label="Choose Start Date"
              placeholder="Start Date"
            />
            <Form.Input
              type="text"
              onChange={handleCompEnd}
              fluid
              label="Choose End Date"
              placeholder="End Date"
            />

          </Form.Group>
          <Form.Button
            color="green"
            content="Add Competition"
            type="submit"
          />
        </Form>
        {isHidden && (
          <Redirect to={'/competitionsfullpage'}/>
        )}
      </Modal.Content>
    </Modal>
  )
}

export default CreateCompetition
