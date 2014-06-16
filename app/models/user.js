var mongoose   = require('mongoose');
var bcrypt     = require('bcrypt-nodejs');

var Activity   = require('./activity');
var Statistics = require('./statistics')

var userSchema = mongoose.Schema({
  username: {
    type     : String,
    unique   : true,
    required : true
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
      email    : String,
      password : String
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

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.auth.local.password)
}

module.exports = mongoose.model('User', userSchema)
