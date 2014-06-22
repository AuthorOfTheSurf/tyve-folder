var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = mongoose.Schema({
  username : String,

  auth : {
    password : String,
    twitter  : {
      id          : String,
      token       : String,
      displayName : String,
      username    : String
    }
  },

  stats : {
    created : {
      type    : Date,
      default : Date.now
    },

    lastActive : {
      type    : Date,
      default : Date.now
    },

    totalScore : {
      type    : Number,
      default : 0
    }
  },

  // activities: {
  //   type    : [Activity],
  //   default : []
  // }
  
})

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.auth.password)
}

module.exports = mongoose.model('User', userSchema)