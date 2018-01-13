
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './src/components/Home.jsx'
import UserHome from './src/components/UserHome.jsx'
import Friends from './src/components/Friends.jsx'
import Competitions from './src/components/Competitions.jsx'
import Trophies from './src/components/Trophies.jsx'

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/userhome" component={UserHome} />
    <Route path="/friends" component={Friends} />
    <Route path="/competitions" component={Competitions} />
    <Route path="/trophies" component={Trophies} />
  </Switch>
)

export default Root
