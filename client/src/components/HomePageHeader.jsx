import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'

const HomePageHeader = () => (
  <div>
    <div className="ui attached stackable menu">
      <div className="ui container">
        <a className="ui small image">
          <Image className="app-icon" src="https://image.flaticon.com/icons/svg/185/185590.svg" />
        </a>
      </div>
      <div className="item">
        <Link to="/userhome">
          <Button className="ui button" role="button">
          Guest
          </Button>
        </Link>
      </div>
      <div className="item">
        <Link to="/signupform">
          <Button className="ui button signup" role="button">
          Sign up
          </Button>
        </Link>
      </div>
      <div className="item">
        <Link to="/userhome">
          <Button className="ui button login" role="button">
          Log in
          </Button>
        </Link>
      </div>
    </div>
  </div>
)

export default HomePageHeader
