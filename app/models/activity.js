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
    default : 20
  },

  lastProgress: {
    type    : Date,
    default : Date.now
  }
});

activitySchema.statics.constructNewActivity = function (name) {
  var newActivity = new this({ 'name': name }).save(function (err) {
    if (err) {
      throw err;
    } else {
      return done(null, newActivity);
    }
  });
};


module.exports = mongoose.model('Activity', activitySchema);