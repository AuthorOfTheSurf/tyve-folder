var express  = require('express')
var app      = express()
var port     = 8080
var mongoose = require('mongoose')
var passport = require('passport')
var flash    = require('connect-flash')

var dbconfig = require('./config/database')

mongoose.connect(dbconfig.url)

require('./config/passport')(passport)

app.configure(function () {
  app.use(express.logger('dev'))
  app.use(express.cookieParser())
  app.use(express.json())
  app.use(express.urlencoded())

  app.set('view engine', 'ejs')

  app.use(express.session({ secret: '123456' }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
})

require('./app/routes.js')(app, passport)

app.listen(port)
console.log('Tyve app started on port ' + port)