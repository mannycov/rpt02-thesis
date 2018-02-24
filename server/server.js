import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'
import { StaticRouter } from 'react-router-dom'
// import App from '../client/src/components/App.jsx'
import Root from '../client/Root.jsx'
import {
  GoalsModel,
  CompetitionsModel
} from '../database/index.js'
import path from 'path';
import cookieParser from 'cookie-parser';
import exphbs from 'express-handlebars';
import expressValidator from 'express-validator';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const db = require('../database/index.js')
// const routes = require('../routes/index');
// const users = require('../routes/users');

import usersRouter from '../routes/users';


//Init App
const app = express();

//BodyParser Middlewar
app.use(expressLogging(logger));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
// app.set('view engine', 'handlebars');

//Set Public Folder
// app.use(express.static(path.join(__dirname, 'public')));

//Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return{
      param : formParam,
      msg : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use('/users' , usersRouter)
// app.use('/', Root);
// app.use('/users', (req, res) => {
//   res.send('Hello homeboy g money')
// });





app.get('/testendpoints', (req, res) => {
  res.send('Hello homeboy g money')
})

app.get('/api/goal', (req, res) => {
  GoalsModel.find({}, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/api/competitions', (req, res) => {
  const competitionName = req.body.competitionName
  const competitionsModelInstance = new CompetitionsModel({
    competitions_name: competitionName,
  })

  competitionsModelInstance.save(function (err) {
    if (err) {
      console.log('competitions not saved', err)
    } else {
      res.sendStatus(201)
    }
  })
})

app.post('/api/goal', (req, res) => {

  const goalTitle = req.body.goal
  const goalModelInstance = new GoalsModel({
    goals_name: goalTitle
  })

  goalModelInstance.save(function (err) {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(201)
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
        <title>HMR all the things!</title>
        <meta name="description" content="">
        <meta name="viewport"
        content="width=device-width,  initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
      </head>
      <body>
        <div id="root">${application}</div>
        <script src="http://localhost:3001/client.js"></script>
      </body>
    </html>`;
  res.send(html)
})

export default app
