var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

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

  console.log(User.find(query))

  return User.findOne(query);
}

module.exports.checkUser = function(userCredentials){
  //destructure user credentials
    //use credentials to find record in db
    //record no exist = false (getuserbyusername)
    //exists = true sends them to userhome
    //one received user object, pass into bcrypt(hash & salt)



      console.log("Req Body from post:" +  JSON.stringify(userCredentials))


      User.getUserByUsername(userCredentials.username)




      username = User.getUserByUsername(userCredentials.username),
      salt = userCredentials.salt,
      hash = userCredentials.hash

  bcrypt.compare(salt, hash, function(err, res) {
      // res == true
      // console.log(res.userCredentials)
      console.log("TRUE USER credentials")

  });

  // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
  //     // res == false
  // });
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  console.log("Compare Password Func")
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
  });
}

