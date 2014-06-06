/* Connectivity */

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tyve_database')

/* Schema inclusion and definitions */

var Schema = mongoose.Schema

var User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  activities: {
    type: [Activity],
    default: []
  },
  stats: {
    type: [Statistics],
    required: true
  }
})

var Activity = new Schema({
  name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number,
    default: 0
  },
  maxScore: {
    type: Number,
    default: 20
  },
  lastProgress: {
    type: Date,
    default: Date.now
  }
})

var Statistics = new Schema({
  lastActive: {
    type: Date,
    default: Date.now
  },
  totalScore: {
    type: Number,
    default: 0
  },
  /* Stringy representation of all user activities */
  involvement: {
    type: [String],
    default: []
  }
})

/* Model instantiation and exporting */

var catalog = {}

catalog.Activity = mongoose.model('Activity', Activity)
catalog.User = mongoose.model('User', User)
catalog.Statistics = mongoose.model('Statistics', Statistics)

module.exports = catalog
