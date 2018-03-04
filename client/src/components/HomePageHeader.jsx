import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from "semantic-ui-react";


const HomePageHeader = () => (
	<div>
		<div className="ui attached stackable menu">
			<div className="ui container">
				<a className="ui small image">
					<Image className="app-icon" src="https://image.flaticon.com/icons/svg/185/185590.svg" />
				</a>

				<a className="item">
					<i className="grid layout icon" /> Browse
				</a>

				<div className="ui simple dropdown item">
					More
					<i className="dropdown icon" />
					<div className="menu">
						<a className="item">
							<i className="edit icon" /> Find a Competition
						</a>
						<a className="item">
							<i className="globe icon" /> About Us
						</a>
						<a className="item">
							<i className="settings icon" /> Contact{" "}
						</a>
					</div>
				</div>
			</div>

			<div className="item">
				<Link to="/signupform">
					<Button className="ui button" role="button">
						Sign up
					</Button>
				</Link>
			</div>
			<div className="item">
				<Link to="/userhome">
					<Button className="ui button" role="button">
						Log-in
					</Button>
				</Link>
			</div>
		</div>
	</div>
);

export default HomePageHeader
