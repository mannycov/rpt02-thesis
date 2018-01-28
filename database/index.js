var mongoose = require('mongoose')
var Schema = mongoose.Schema
var db = mongoose.connection

mongoose.connect(
	"mongodb://competely:Youcandoit1@ds133796.mlab.com:33796/competely"
);

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('you da man and connected in more ways than you know ')
})

const userSchema = new Schema({
  user_id: Number,
  first_name: String,
  last_name: String,
  username: String,
  email: String,
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
})

const goalsSchema = new Schema({
  goals_id: Number,
  goals_name: String,
  category_id: Array,
  status: String,
  description: String,
  purpose: String,
  checkpoint_id: Number,
  ongoing_goal: Boolean
})

export const GoalsModel = mongoose.model('GoalsModel', goalsSchema);

const competitionsSchema = new Schema({
	competitions_id: Number,
	competitions_name: String,
	start_date: Date,
	end_date: Date,
	category_name: String,
	category_id: Number,
	members: Array,
	winner: Number,
	ranking_list: Array,
	trophies: Array,
	checkpoint_id: Number,
	checkpoint_name: String,
	status: String,
	trophy_id: Number,
	trophy_name: String
});

export const CompetitionsModel = mongoose.model("CompetitionsModel", competitionsSchema);

const categorySchema = new Schema({
  category_id: Number,
  category_name: String
})

