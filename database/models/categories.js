const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categoriesSchema = new Schema({
  category_id: Number,
  competitions_pictures: Array
})

const CategoriesModel = module.exports = mongoose.model('CategoriesModel', categoriesSchema)