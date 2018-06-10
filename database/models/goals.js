const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalsSchema = new Schema({
  goals_id: Number,
  goals_user: String,
  goals_name: String,
  weightTarget: Number,
  repTarget: Number,
  minTarget: Number,
  secsTarget: Number,
  daysTarget: Number,
  category: String,
  category_id: Array,
  start_date: String,
  end_date: String,
  notes: String,
  complete: Boolean,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  checkIns: [{ type: Schema.Types.ObjectId, ref: 'CheckInModel' }]
})

const GoalsModel = module.exports = mongoose.model('GoalsModel', goalsSchema)
