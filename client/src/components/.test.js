import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../Root.jsx'
import { shallow, mount, render } from "enzyme";
import { MemoryRouter as Router, withRouter } from "react-router-dom";

it('renders withouth crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(
	  <Router>
			<Root />
		</Router>, div);
	// shallow(<Router>
	// 		<Root />
	// 	</Router>);
})