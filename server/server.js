import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'
import { StaticRouter } from 'react-router-dom'

import Root from '../client/Root.jsx'
import {
  GoalsModel,
  CheckInModel,
  CompetitionsModel,
  CategoriesModel
} from '../database/index.js'

// import GoalsModel from '../database/models/goals'
// import CompetitionsModel from '../database/models/competitions.js'
const db = require('../database/index.js')

const app = express()

app.use(expressLogging(logger))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const emptyObj = []

app.get('/api/goal', (req, res) => {
  GoalsModel.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/api/getcompetitions', (req, res) => {
  CompetitionsModel.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/api/competitions', (req, res) => {
  const competitionBody = req.body
  let matchingCategory = ''

  CategoriesModel.find({}, (err, defaultPics) => {
    let defaultPicsInDb = defaultPics[0].competitions_pictures
    let userSubbedCategory = competitionBody.competitionCategory

    for (let i = 0; i <= defaultPicsInDb.length -1; i++) {
      if (userSubbedCategory == Object.keys(defaultPicsInDb[i])) {
        matchingCategory = defaultPicsInDb[i][userSubbedCategory]
      }
    }
    if (err) {
      console.log(err)
    } else {
      const competitionsModelInstance = new CompetitionsModel({
        competitions_name: competitionBody.comptetionName,
        competitions_category: competitionBody.competitionCategory,
        competitions_start_date: competitionBody.competitionStart,
        competitions_end_date: competitionBody.competitionEnd,
        competitions_pictures: matchingCategory
      })
      competitionsModelInstance.save((err) => {
        if (err) {
          console.log('competitions not saved', err)
        } else {
          CompetitionsModel.find({}, function (err, data) {
            if (err) {
              console.log(err)
            } else {
              console.log('from server file data coming back from DB', data)
              res.status(201).json(data)
            }
          })
        }
      })   //find the categor in category model save it to a variable
    }
  })
})

app.post('/api/goal', (req, res) => {
  const goalTitle = req.body.goal
  const goalTarget = req.body.target
  const goalCategory = req.body.category
  const goalStartDate = req.body.startDate
  const goalEndDate = req.body.endDate
  const goalNotes = req.body.notes

  const goalModelInstance = new GoalsModel({
    goals_name: goalTitle,
    target: goalTarget,
    category: goalCategory,
    start_date: goalStartDate,
    end_date: goalEndDate,
    notes: goalNotes
  })

  goalModelInstance.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(201)
    }
  })
})

app.post('/api/checkin', (req, res) => {
  const goalId = req.body.goalId
  const checkInWeight = req.body.weight
  const checkInReps = req.body.reps
  const checkInSets = req.body.sets
  const checkInTime = req.body.time

  const checkIn = new CheckInModel({
    goal: goalId,
    weight: checkInWeight,
    reps: checkInReps,
    sets: checkInSets,
    time: checkInTime
  })

  checkIn.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(201)
    }
  })
})

app.delete('/api/goal/:id', (req, res) => {
  GoalsModel.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(200)
    }
  })
})

app.get('*', (req, res) => {
  const context = {}
  const application = renderToString(<StaticRouter location={req.url} context={context} ><Root /></StaticRouter>)

  const html = `<!doctype html>
    <html class="no-js" lang="">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Compete.ly</title>
        <meta name="description" content="">
        <meta name="viewport"
        content="width=device-width,  initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
      </head>
      <body>
        <div id="root">${application}</div>
        <script src="http://localhost:3001/client.js"></script>
      </body>
    </html>`
  res.send(html)
})

export default app
