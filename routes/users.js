// import fs from 'fs'
// import multer from 'multer'
// cant mix import and module exports

const express = require('express')

const User = require('../database/models/users')

const userRouter = express.Router()

// Register
userRouter.get('/', (req, res) => {
  console.log('😀')
})

// Register User
userRouter.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const password2 = req.body.password2

  if (!req.body.name) {
    console.log('error')
  } else {
    const userProps = {
      name,
      email,
      username,
      password
    }

    User.createUser(userProps, res, (err, user) => {
      if (err) {
        console.log(err)
      }
    })
  }
})

// User Login
userRouter.post('/login', (req, res) => {
  // find the user by their email
  User.find({ email: req.body.email }, (err, user) => {
    if (err) throw err
    const id = user[0]._id
    const newHash = user[0].hash

    // check the user's password
    User.checkUser(req.body.password, newHash, (result) => {
      if (result) {
        res.redirect(`http://localhost:3000/userhome/${id}`)
      } else {
        res.redirect('/login')
      }
    })
  })
})

userRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users/login')
})

module.exports = userRouter
