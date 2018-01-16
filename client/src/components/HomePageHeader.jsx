import React from 'react'

import { Link } from 'react-router-dom'

const HomePageHeader = () => (
	<div>
		<div className="ui menu" id="header-home">
			<div className="item">
				<Link to="/signupform">
					<button
						className="ui button"
						role="button">
						Sign up
					</button>
				</Link>
			</div>
			<div className="item">
				<button className="ui button" role="button">
					Log-in
				</button>
			</div>
		</div>
	</div>
);

export default HomePageHeader;
