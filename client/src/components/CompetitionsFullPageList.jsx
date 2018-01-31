import React from 'react'
import { Header, Image, Grid, Progress, Divider } from 'semantic-ui-react'
import CompetitionsFriendsRank from './CompetitionsFriendsRank.jsx'

const CompetitionsFullPageList = ({ CompetitionsFp }) => {
	return <div>
			<Grid columns={3} divided>
				<Grid.Row>
					<Grid columns={2} padded>
						<Grid.Column>
							<Image src={CompetitionsFp.img} />
							<Header as="h5">{CompetitionsFp.categoryName}</Header>
						</Grid.Column>
						<Grid.Column>
							<Header size="large">{CompetitionsFp.competitionName}</Header>
						</Grid.Column>
					</Grid>
					<Grid.Column>
						<CompetitionsFriendsRank />
					</Grid.Column>
					<Grid.Column>
						<Header size="large">Started On</Header>
						{CompetitionsFp.startDate}
						<Header size="large">Ends On</Header>
						{CompetitionsFp.endDate}
						<Progress percent={CompetitionsFp.progress} progress />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider />
		</div>;
}

export default CompetitionsFullPageList
