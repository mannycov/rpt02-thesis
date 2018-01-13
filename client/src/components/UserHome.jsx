import React from 'react'
import { Button } from 'semantic-ui-react'

const UserHome = () => (
  <div>
    <h1>The User's home page</h1>
    <ul>
      <h3>my goals</h3>
      <li>
        goal 1
      </li>
    </ul>
    <form>
      <input type="text" />
    </form>
    <Button>Add Goal</Button>
    <ul>
      <h3>my friends</h3>
      <li>
        friend 1
      </li>
    </ul>
    <ul>
      <h3>competitions</h3>
      <li>
        competition 1
      </li>
    </ul>
    <ul>
      <h3>my trophies</h3>
      <li>
        trophy 1
      </li>
    </ul>
  </div>
)

export default UserHome