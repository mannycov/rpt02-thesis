import React, { Component } from 'react'

// Components
import MenuBar from './MenuBar.jsx'

class Goal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.value)
    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <div>
        <MenuBar />
        <h1>My Goals</h1>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button">Click Me!</button>
        </form>
        <br /><br />

        <table></table>
      </div>
    )
  }
}

export default Goal
