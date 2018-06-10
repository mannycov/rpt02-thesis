const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const dB = require('../../database/index.js')
const Schema = mongoose.Schema

// const userSchema = new Schema({
//   user_id: Number,
//   first_name: String,
//   last_name: String,
//   username: String,
//   email: String,
//   // comments: [{ body: String, date: Date }],
//   date_of_birth: { type: Date },
//   about_me: String,
//   password: String,
//   friends_id: Array,
//   goals_id: Array,
//   competitions_id: Array,
//   public_profile: Boolean,
//   country: String,
//   state: String,
//   city: String,
//   postal: Number,
//   trophies: Number
// })

const userSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  salt: {
    type: String
  },
  hash: {
    type: String
  },
  goals: [{ type: Schema.Types.ObjectId, ref: 'GoalsModel' }]
})

const User = module.exports = mongoose.model('User', userSchema)

module.exports.createUser = function (userProps, res, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.log('error after gensalt: ', err)
    }
    bcrypt.hash(userProps.password, salt, (err, hash) => {
      if (err) {
        console.log('error in hash: ', err)
      }
      const newUser = new User({
        name: userProps.name,
        email: userProps.email,
        username: userProps.username,
        salt,
        hash
      })
      newUser.save()
      const id = newUser._id
      res.redirect(`http://localhost:3000/userhome/${id}`)
    })
  })
}

module.exports.getUserByEmail = function (email, callback) {
  console.log(`getusername${ email }`)

  User.find({ email: req.body.email }, (err, user) => {
    if (err) throw err
    let newHash = user[0].hash

    User.checkUser(req.body.password, newHash, (result) => {
      console.log("reaching the checkuser function in users models file:" + result)
      //import userAccess then pass unique id into func
      // User.userAccess(user[0].id, function(data) {
      //   res.send(data)
      // })
    })
  })

  // return User.findOne(query)
}

module.exports.checkUser = function (userCredentials, hash, callback) {

  bcrypt.compare(userCredentials, hash, (err, result) => {
    if (result) {
      callback(result)
    } else {
      console.log('Incorrect login')
    }
  })
}

// module.exports.userAccess = function (userId, cb) {
//   console.log('in the userjs file useraccess', userId)
//   const dataCompUserGoals = []
//   const userIdInDB = userId

//   dataCompUserGoals.push(userIdInDB)

//   dB.CompetitionsModel.find({ competitions_user: userIdInDB })
//     .then((data) => {
//       dataCompUserGoals.push(data)
//       return dB.GoalsModel.find({ goals_user: userIdInDB })
//     })
//     .then((data) => {
//       dataCompUserGoals.push(data)
//       cb(dataCompUserGoals)
//     })
//     .catch((err) => {
//       console.log(err, 'this is the promise error')
//     })
// }
