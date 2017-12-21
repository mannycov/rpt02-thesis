const bodyParser = require('body-parser')
const express = require('express')
const expressLogging = require('express-logging')
const logger = require('logops')

const app = express()

app.use(expressLogging(logger))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(express.static('./client/dist'))

app.get('/testendpoint', function (req, send) {
  console.log('hello homies')
  res.send('hello dudettes?')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
