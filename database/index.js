const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/competely')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('you da man and connected in more ways than you know ')
});

var userSchema = new Schema({
  user_id:  ObjectId,
  first_name: String,
  last_name: String,
  username: String,
  email:   String,
  // comments: [{ body: String, date: Date }],
  date_of_birth: { type: Date },
  about_me: String,
  password: String,
  friends_id: Array,
  goals_id: Array,
  competitions_id: Array,
  public_profile: Boolean,
  country: String,
  state: String,
  city: String,
  postal: Number,
  trophies: Number
});

var goalsSchema = new Schema({
  goals_id:  ObjectId,
  goals_name: String,
  category_id: Array,
  status: String,
  description: String,
  purpose: String,
  checkpoint_id: Number,
  ongoing_goal: Boolean
});

var competitionsSchema = new Schema({
  competitions_id:  ObjectId,
  competitions_name: String,
  start_date: Date,
  end_date: Date,
  category_id: Number,
  members: Array,
  winner: Number,
  ranking_list: Array,
  trophies: Array
});

var competitionsSchema = new Schema({
  checkpoint_id:  ObjectId,
  checkpoint_name: String,
  status: String
});

var categorySchema = new Schema({
  category_id:  ObjectId,
  category_name: String
});

var competitionsSchema = new Schema({
  trophy_id:  ObjectId,
  trophy_name: String
});

module.exports = db