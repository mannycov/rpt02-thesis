var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')

 var dB = require('../../database/index.js')


// User Schema
var userSchema = mongoose.Schema({
  username: {
    type: String,
    index:true
  },
  // password: {
  //   type: String
  // },
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
  }

});

var User = module.exports = mongoose.model('User', userSchema);


module.exports.createUser = function(userProps, callback){
  console.log("newuser:"  + userProps)
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(userProps.password, salt, function(err, hash) {
          // newUser.password = hash;
          var newUser = new User({
              name: userProps.name,
              email: userProps.email,
              username: userProps.username,
              salt: salt,
              hash: hash
          })

          newUser.save()

      });
  });
}

module.exports.getUserByUsername = function(username, callback){
  console.log("getusername"  + username)
  var query = {username: username};

  // console.log(User.find(query))

  return User.findOne(query);
}

module.exports.checkUser = function(userCredentials, hash, callback){
  console.log("Req Body from post:" +  userCredentials + hash)
      // User.getUserByUsername(userCredentials)

  bcrypt.compare(userCredentials, hash, function(err, result) {
      // res === true
      if (result) {
        callback(result)
      } else {
        console.log("Incorrect login")
      }
    console.log("userCredentials: " + userCredentials)
    console.log("hash: " + hash)
    console.log("Res: " + result)
    // callback(res)
  }

  );
// }

// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
//   console.log(id)

// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//       if(err) throw err;
//       callback(null, isMatch);
//   });
}

module.exports.userAccess = function(userId) {
	let dataCompUserGoals = [];
	let userIdInDB = userId;

	dataCompUserGoals.push(userIdInDB);

	dB.CompetitionsModel.find({ competitions_user: userIdInDB })
		.then(function(data) {
			dataCompUserGoals.push(data);
			return dB.GoalsModel.find({ goals_user: userIdInDB })
		})
		.then(function(data) {
			dataCompUserGoals.push(data);
			callback(null, dataCompUserGoals);
		})

		.catch(function(err) {
			console.log(err, "this is the promise error");
		})
};
