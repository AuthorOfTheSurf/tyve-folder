var mongoose   = require('mongoose');

var User       = require('./user');

var activitySchema = mongoose.Schema({
  name: {
    type     : String,
    required : true,
    match    : ['/\w{3}\w*/', 'Activity names must be at least 3 characters long.']
  },

  created: {
    type    : Date,
    default : Date.now
  },

  score: {
    type    : Number,
    default : 0
  },

  maxScore: {
    type    : Number,
    default : 11
  },

  lastProgress: {
    type    : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Activity', activitySchema);