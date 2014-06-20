var express  = require('express')
var app      = express()
var port     = (process.env.PORT || 3000)
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
  //app.use(express.multipart())

  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')

  app.use(express.session({ secret: 'GrimondsAreForever' }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
})

require('./app/routes')(app, passport)

app.listen(port)
console.log('Tyve app started on port ' + port)
