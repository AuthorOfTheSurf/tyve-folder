var mongoose = require('mongoose');

var statisticsSchema = new mongoose.Schema({
  lastActive: {
    type    : Date,
    default : Date.now
  },

  totalScore: {
    type    : Number,
    default : 0
  },

  /* Stringy representation of all user activities */
  involvement: {
    type    : [String],
    default : []
  }
});

module.exports = mongoose.model('Statistics', statisticsSchema);