import React from 'react'
import { Button } from 'semantic-ui-react';

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Hello</h1>
        <h2>this stuff is hella tight</h2>
        <div>hey homboys</div>
        <Button>click me!</Button>
      </div>
    )
  }
}

export default App
