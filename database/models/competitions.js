const mongoose = require('mongoose')

const Schema = mongoose.Schema

const competitionsSchema = new Schema({
  competitions_id: Number,
  competitions_user: String,
  competitions_pictures: String,
  competitions_name: String,
  competitions_category: String,
  competitions_start_date: Date,
  competitions_end_date: Date,
  competitions_won: Array,
  category_id: Number,
  members: Array,
  winner: Number,
  ranking_list: Array,
  checkIn_id: Number,
  checkIn_name: String,
  status: String,
  trophies: Array,
  trophy_id: Number,
  trophy_name: String
})

const CompetitionsModel = module.exports = mongoose.model('CompetitionsModel', competitionsSchema)
