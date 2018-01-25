import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Button, Popup, Grid, Menu } from 'semantic-ui-react'
import Data from '../../FakeData.js'

const CompetitionsPopUp = () => {
	return(<Link to="/competitions">
		{console.log('data in the mo fo', Data[0].competitionName)}
			<Popup
				trigger={<Menu.Header id=""><b>Competitions</b></Menu.Header>}
				flowing
				hoverable
			>
			<Link to="/competitions">
				<Grid centered divided columns={3}>
					<Grid.Column textAlign="center">
						<Header as="h4">{Data.competitionName}</Header>
						<p>
							<b>{Data.competitionName}</b>
						</p>
					</Grid.Column>
					<Grid.Column textAlign="center">
						<Header as="h4">Business Plan</Header>
						<p>
							<b>5</b> projects, $20 a month
						</p>
						<Button>Choose</Button>
					</Grid.Column>
					<Grid.Column textAlign="center">
						<Header as="h4">Premium Plan</Header>
						<p>
							<b>8</b> projects, $25 a month
						</p>
					</Grid.Column>
				</Grid>
			</Link>
		</Popup>
	</Link>
	);
};

export default CompetitionsPopUp;
