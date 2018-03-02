import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Accomplishments = ({ accomplishments }) => (
  <div>
    {accomplishments.map(accomplishment => (
      <Card>
        <div className="ui tiny image" >
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Twemoji2_1f3c6.svg" title="First Place" size='small' />
        </div>
        <div class="content">
          <div className="header">{accomplishment.goals_name}</div>
          <div className="meta">{accomplishment.target}</div>
        </div>
      </Card>
    ))}
  </div>
)

export default Accomplishments
