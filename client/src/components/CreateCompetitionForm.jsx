import React from 'react'
import { Form } from 'semantic-ui-react'
import DefaultCompeteCategories from '../../DefaultCompeteCategories'

const CreateCompetitionForm = () => {
  console.log();
  return <Form>
			<Form.Group widths="equal">
				<Form.Input fluid label="Competition Name" placeholder="Competition Name" />
				<Form.Select fluid label="Choose Category" options={DefaultCompeteCategories} placeholder="Category" />
				<Form.Input fluid label="Choose Start Date" placeholder="Start Date" />
				<Form.Input fluid label="Choose End Date" placeholder="End Date" />
			</Form.Group>
		</Form>;
}

export default CreateCompetitionForm
