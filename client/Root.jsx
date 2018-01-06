
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './src/components/App.jsx'
import Home from './src/components/Home.jsx'

const Root = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
  </Switch>
)

export default Root
