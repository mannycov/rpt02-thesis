import React from 'react'
import { Button } from 'semantic-ui-react'

const SignupForm = () => (
  <div>
    <form className="contact_form" action="" method="post" name="contact_form">
		  <ul>
        <li>
          <h2>Sign Up</h2>
          <span className="required_notification">* Denotes Required Field</span>
        </li>
        <li>
          <label for="email">Email:</label>
          <input type="text" name="email" />
          <span className="form_hint">Proper format "name@something.com"</span>
        </li>
      </ul>
    </form>
    <form class="ui form">
			<div class="field">
				<label>First Name</label>
				<input placeholder="First Name" />
			</div>
			<div class="field">
				<label>Last Name</label>
				<input placeholder="Last Name" />
			</div>
			<div class="field">
				<div class="ui checkbox">
					<input type="checkbox" class="hidden" readonly="" tabindex="0" />
					<label>I agree to the Terms and Conditions</label>
				</div>
			</div>
			<button type="submit" class="ui button" role="button">Submit</button>
    </form>
  </div>
)

export default SignupForm