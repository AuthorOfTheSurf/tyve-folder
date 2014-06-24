var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var Activity = require('./activity')

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

  activities: {
    type    : [Activity.schema],
    default : []
  }
  
})

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.auth.password)
}

userSchema.methods.addActivity = function (name) {
  var newActivity = new Activity({
    name: name
  })
  this.activities.push(newActivity)
  this.save(function (err, user) {
    if (err) {
      console.log('unexpected error')
    } else {
      console.log('Added activity \'' + name + '\' to user ' + user.username)
    }
  })
}

module.exports = mongoose.model('User', userSchema)