const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/competely')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('you da man and connected in more ways than you know ')
});
