import React from "react"
import { Button, Header, Icon, Modal, Statistic } from "semantic-ui-react"
import CreateCompetitionForm from './CreateCompetitionForm.jsx';

const CreateCompetition = () => (
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
				<CreateCompetitionForm />
		</Modal.Content>
		<Modal.Actions>
			<Button color="red">
				<Icon name="remove" /> Cancel
			</Button>
			<Button color="green">
				<Icon name="checkmark" /> Add Competition
			</Button>
		</Modal.Actions>
	</Modal>
);

export default CreateCompetition
