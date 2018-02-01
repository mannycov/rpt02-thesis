import React, { Component } from 'react'

// Components
import MenuBar from './MenuBar.jsx'
import GoalTable from './GoalTable.jsx'

class Goal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      target: '',
      values: []
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTargetChange = this.handleTargetChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange (e) {
    this.setState({
      title: e.target.value
    })
  }

  handleTargetChange (e) {
    this.setState({
      target: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    console.log(this.state.title)

    const copyOfValues = [...this.state.values]

    copyOfValues.push(this.state.title, this.state.target)
    
    this.setState({
      title: '',
      target: '',
      values: copyOfValues
    }, () => { console.log(this.state.values) })
  }

  render () {
    return (
      <div>

        <MenuBar />

        <h1>My Goals</h1>

        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="field">
            <select name="types">
              <option value="Endurance">Endurance</option>
              <option value="Strength">Strength</option>
              <option value="Body Composition">Body Composition</option>
            </select>
          </div>
          <div className="field">
            <label>Goal Target</label>
            <input
              type="text"
              value={this.state.target}
              onChange={this.handleTargetChange}
            />
          </div>
          <button className="ui button">Submit</button>
        </form>
        <br /><br />

        <GoalTable
          values={this.props.values}
        />

      </div>
    )
  }
}

export default Goal
