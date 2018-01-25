import React from 'react'
import { Header, Button, Popup, Grid, Menu, Image, Label, List, Segment, Table, Progress } from 'semantic-ui-react'
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

		<Segment clearing />
		<Grid columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					<Image src="https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png" />
				</Grid.Column>
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
											Lena
											<Header.Subheader>Human Resources</Header.Subheader>
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
											Matthew
											<Header.Subheader>Fabric Design</Header.Subheader>
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
											Lindsay
											<Header.Subheader>Entertainment</Header.Subheader>
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
											Mark
											<Header.Subheader>Executive</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>4th</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Grid.Column>
				<Grid.Column>
					<Image src="https://react.semantic-ui.com/assets/images/wireframe/media-paragraph.png" />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column />
				<Grid.Column />
				<Grid.Column>
					<Progress percent={44} progress />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
);

export default CompetitionsFullPage