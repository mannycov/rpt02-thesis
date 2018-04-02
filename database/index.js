const mongoose = require('mongoose')

const db = mongoose.connection

mongoose.connect(
  'mongodb://competely:Youcandoit@ds133796.mlab.com:33796/competely',
  { server: { reconnectTries: Number.MAX_VALUE } }
)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('you da man and connected in more ways than you know')
})
