import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const HomePageHeader = () => (
  <div>
    <div className="ui menu" id="header-home">
      <div className="item">
        <Link to="/signupform">
					<Button className="ui button" role="button">
						Sign up
					</Button>
				</Link>
			</div>
			<div className="item">
				<Button className="ui button" role="button">
					Log-in
				</Button>
			</div>
		</div>
	</div>
);

export default HomePageHeader
