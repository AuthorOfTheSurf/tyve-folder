var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
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
    default : 20
  },

  lastProgress: {
    type    : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Activity', activitySchema);