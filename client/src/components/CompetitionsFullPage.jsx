import React from 'react'
import { Header, Button, Popup, Grid, Menu, Image, Label, List, Segment, Table, Progress, Statistic, Icon } from 'semantic-ui-react'
import MenuBar from './MenuBar.jsx'

const CompetitionsFullPage = () => (
	<div>
		<MenuBar />
		<Header as="h2">
			<Image
				circular
				src="https://react.semantic-ui.com/assets/images/avatar/large/patrick.png"
			/>{" "}
			My Competitions
		</Header>
		<Segment clearing>
			<Statistic.Group widths="three">
				<Statistic>
					<Statistic.Value text>
						<i class="plus icon" />
					</Statistic.Value>
					<Statistic.Label>Create Competition</Statistic.Label>
				</Statistic>

				<Statistic>
					<Statistic.Value>
						{`5  `}
						<i class="flag checkered icon" />
					</Statistic.Value>
					<Statistic.Label>{`Competitions    Won`}</Statistic.Label>
				</Statistic>

				<Statistic>
					<Statistic.Value>
						<Image
							src="https://st2.depositphotos.com/4326917/10312/v/450/depositphotos_103125822-stock-illustration-champions-cup-line-vector-icon.jpg"
							className="circular inline"
						/>
						42
					</Statistic.Value>
					<Statistic.Label>Trophies</Statistic.Label>
				</Statistic>
			</Statistic.Group>
		</Segment>
		<Grid columns={3} divided>
			<Grid.Row>
				<Grid columns={2} padded>
					<Grid.Column>
						<Image src="https://media1.tenor.com/images/074d7cfcf221f8fdc6b51248b94a2537/tenor.gif?itemid=4172168" />
					</Grid.Column>
					<Grid.Column>
						<Header size="large">Get Huge</Header>
					</Grid.Column>
				</Grid>
				<Grid.Column>
					<Table basic="very" celled collapsing>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Leaders</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Header as="h4" image>
										<Image
											src="https://react.semantic-ui.com/assets/images/avatar/small/lena.png"
											rounded
											size="mini"
										/>
										<Header.Content>
											Li
											<Header.Subheader>@li</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>1st</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Header as="h4" image>
										<Image
											src="https://react.semantic-ui.com/assets/images/avatar/small/matthew.png"
											rounded
											size="mini"
										/>
										<Header.Content>
											Matt
											<Header.Subheader>@mattander91</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>2nd</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Header as="h4" image>
										<Image
											src="https://react.semantic-ui.com/assets/images/avatar/small/lindsay.png"
											rounded
											size="mini"
										/>
										<Header.Content>
											Ramya
											<Header.Subheader>@ramyatata</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>3rd</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Header as="h4" image>
										<Image
											src="https://react.semantic-ui.com/assets/images/avatar/small/mark.png"
											rounded
											size="mini"
										/>
										<Header.Content>
											Vitor
											<Header.Subheader>@vpereira</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>4th</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
				<Grid.Column />
				<i class="calendar outline icon" >>
        <Header size="large">Start Date</Header>
				<Grid.Column />
        <i class="calendar outline icon">
        <Header size="large">End Date</Header>
				<Grid.Column>
					<Progress percent={44} progress />
				</Grid.Column>
			</Grid.Row>



		</Grid>
	</div>
);

export default CompetitionsFullPage