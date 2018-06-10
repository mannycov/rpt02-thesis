import React, { Component } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
import { Button, Modal, Form } from 'semantic-ui-react'

class SignupForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      url: '',
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.close = this.close.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
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
    const {
      name, email, username, password, password2
    } = this.state

    if (name === '' || email === '' || username === '' || password === '' || password2 === '') {
      this.setState({ open: true })
    } else if (name !== '' && email !== '' && username !== '' && password !== '' && password2 !== '') {
      axios
        .post('/users/register', {
          name,
          email,
          username,
          password,
          password2
        })
        .then((response) => {
          this.setState({
            url: response.request.responseURL
          })
        })
        .catch((err) => {
          console.log(err)
        })
      this.setState({
        name: '', email: '', username: '', password: '', password2: ''
      })
    }
  }

  render () {
    const {
      name, email, username, password, password2, open
    } = this.state

    return (
      <div className="ui text container">
        {this.handleRedirect()}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder="Name" name="name" value={name} onChange={this.handleChange} />
            <Form.Input placeholder="Email" name="email" value={email} onChange={this.handleChange} />
            <Form.Input placeholder="Username" name="username" value={username} onChange={this.handleChange} />
            <Form.Input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
            <Form.Input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={this.handleChange} />

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

            <Form.Button content="Submit" />
          </Form.Group>
        </Form>

      </div>
    )
  }
}

export default SignupForm
