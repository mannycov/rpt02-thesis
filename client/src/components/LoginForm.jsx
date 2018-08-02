import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Modal, Form } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      open: false,
      url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.close = this.close.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e, { name, value }) {
    this.setState({
      [name]: value
    })
  }

  close () {
    this.setState({ open: false })
  }

  handleRedirect () {
    const { url } = this.state
    const id = url.slice(31)
    const newUrl = `/userhome/${id}`
    if (url !== '') {
      return (
        <Redirect to={newUrl} />
      )
    }
  }

  handleSubmit () {
    const { email, password } = this.state

    if (email === '' || password === '') {
      this.setState({ open: true })
    } else if (email !== '' && password !== '') {
      axios
        .post('/users/login', {
          email,
          password
        })
        .then((response) => {
          this.setState({ url: response.request.responseURL })
        })
        .catch((err) => {
          console.log(err)
        })
      this.setState({ email: '', password: '' })
    }
  }

  render () {
    const { email, password, open } = this.state

    return (

      <div className="ui text container">
        {this.handleRedirect()}
        <h1>Log In</h1>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <label for="email"><b>Email</b></label>
          <Form.Input placeholder="Email" name="email" value={email} onChange={this.handleChange} />
          <label for="password"><b>Password</b></label>
          <Form.Input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          <Button primary>Log In</Button>
          <Link to="/">
            <button className="ui button logout" type="submit">Cancel</button>
          </Link>
        </Form>
        <Modal size="mini" open={open} onClose={this.close}>
          <Modal.Header>
            Enter Fields
          </Modal.Header>
          <Modal.Content>
            <p>Make sure to fill out all the fields!</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} positive icon="checkmark" labelPosition="right" content="Got It" />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default LoginForm
