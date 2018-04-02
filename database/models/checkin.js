const mongoose = require('mongoose')

const Schema = mongoose.Schema

const checkInSchema = new Schema({
  checkin_id: Number,
  checkin_user: Number,
  goal: { type: Schema.Types.ObjectId, ref: 'GoalsModel' },
  date: String,
  weight: Number,
  reps: Number,
  sets: Number,
  min: Number,
  secs: Number,
  target: Number,
  check_in: Boolean
})

const CheckInModel = module.exports = mongoose.model('CheckInModel', checkInSchema)