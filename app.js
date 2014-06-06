var express = require('express')
var path = require('path')
var db = require('./app/mongo-settings')

var app = express()
var methodOverride = require('method-override')

app.configure(function () {
  app.use(methodOverride('X-HTTP-Method-Override'))
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }))
  app.set('view engine', 'jade')
})

/* CRUD API */

app.get('/', function (req, res) {
  res.send('Tyve homepage 0.1')
})

app.get('/api', function (req, res) {
  res.send('Tyve API is running')
})

app.get('/api/users', function (req, res) {
  return db.User.find(function (err, users) {
    if (!err) {
      return res.send(users)
    } else {
      return console.log(err)
    }
  })
})

app.post('/api/users', function (req, res) {
  var newUser = new db.User({
    username: req.body.username,
    activities: [],
    stats: new db.Statistics({})
  })
  newUser.save(function (err) {
    if (!err) {
      return console.log('POST: new user ' + req.body.username)
    } else {
      return console.log(err)
    }
  })
  return res.send(newUser)
})

app.listen(3000)
