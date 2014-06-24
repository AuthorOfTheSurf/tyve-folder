var mongoose   = require('mongoose');

var User       = require('./user');

exports.schema = activitySchema = mongoose.Schema({
  name: {
    type     : String,
    required : true
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