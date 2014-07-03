var express  = require('express')
var app      = express()
var port     = 8080
var mongoose = require('mongoose')
var passport = require('passport')
var flash    = require('connect-flash')
var engines  = require('consolidate')

var dbconfig = require('./config/database')

mongoose.connect(dbconfig.url)

require('./config/passport')(passport)

app.configure(function () {
  app.use(express.static(__dirname + '/public'))
  app.use('/bower_components', express.static(__dirname + '/bower_components'))
  app.use(express.logger('dev'))
  app.use(express.cookieParser())
  app.use(express.json())
  app.use(express.urlencoded())

  app.set('views', __dirname + '/public/views');
  app.engine('html', engines.mustache);
  app.set('view engine', 'html')

  app.use(express.session({ secret: '123456' }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
})

require('./app/routes.js')(app, passport)

app.listen(port)
console.log('Tyve app started on port ' + port)