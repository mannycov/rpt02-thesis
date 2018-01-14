import React from 'react'
import { Button } from 'semantic-ui-react'

const SignupForm = () => (
  <div>
		<form class="contact_form" action="" method="post" name="contact_form">
			<ul>
				<li>
          <h2>Sign Up</h2>
					<span class="required_notification">* Denotes Required Field</span>
				</li>
				<li>
					<label for="email">Email:</label>
					<input type="text" name="email" />
					<span class="form_hint">Proper format "name@something.com"</span>
				</li>
      </ul>
    </form>
	</div>
)

export default UserHome