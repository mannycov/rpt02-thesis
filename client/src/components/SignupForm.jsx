import React from 'react'
import { Button } from 'semantic-ui-react'

const SignupForm = () => (
	<div className="ui text container">
		<form className="ui form">
			<div className="field">
				<label>User Name</label>
				<input placeholder="User Name" />
			</div>
			<div className="field">
				<label>First Name</label>
				<input placeholder="First Name" />
			</div>
			<div className="field">
				<label>Last Name</label>
				<input placeholder="Last Name" />
			</div>
			<div class="field">
				<label>Email</label>
				<div class="ui input">
					<input type="text" placeholder="Email" />
				</div>
			</div>
			<div class="field">
				<label>Password</label>
				<div class="ui input">
					<input type="text" placeholder="Enter Your Password" />
				</div>
			</div>
			<div class="field">
				<label>Verify Password</label>
				<div class="ui input">
					<input type="text" placeholder="Re-Enter Your Password" />
				</div>
			</div>
			<div className="field">
				<div className="ui checkbox">
					<input type="checkbox" class="hidden" readonly="" tabindex="0" />
					<label>I agree to the Terms and Conditions</label>
				</div>
			</div>
			<button type="submit" class="ui button" role="button">
				Submit
			</button>
		</form>
	</div>
);

export default SignupForm