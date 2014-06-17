var mongoose   = require('mongoose');
var bcrypt     = require('bcrypt-nodejs');

var Activity   = require('./activity');
var Statistics = require('./statistics');

var userSchema = mongoose.Schema({
  username: {
    type     : String,
    unique   : true,
    required : true,
    match    : ['/\w{4}\w*/', 'Usernames must be at least 4 characters long.']
  },

  activities: {
    type    : [Activity],
    default : []
  },

  stats: {
    type     : [Statistics],
    required : true
  },

  auth: {
    local: {
      password : { 
        type     : String,
        required : true,
        match    : ['/\w{4}\w*/', 'Passwords must be at least 12 characters long.']
      }
    },

    facebook: {
      id    : String,
      token : String,
      email : String,
      name  : String
    },

    twitter: {
      id          : String,
      token       : String,
      displayName : String,
      username    : String
    },

    google: {
      id    : String,
      token : String,
      email : String,
      name  : String
    }
  }
});

var generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.method.validPassword = function (password) {
  return bcrypt.compareSync(password, this.auth.local.password);
}

userSchema.statics.constructNewUser = function (username, password) {
  var data = {};
  data.username = username;
  data.auth.local.password = generateHash(password);
  data.stats = new Statistics({});
  var newUser = new this(data).save(function (err) {
    if (err) {
      throw err;
    } else {
      return done(null, newUser);
    }
  });
};

module.exports = mongoose.model('User', userSchema);
