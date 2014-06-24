var User = require('./models/user')

module.exports = function (app, passport) {

  app.get('/', function (req, res) {
    res.render('index.ejs')
  })

  app.get('/login', function (req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') })
  })

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }))

  app.get('/signup', function (req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') })
  })

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }))

  app.get('/profile', function (req, res) {
    res.redirect('/profile/' + req.user.username)
  })

  app.get('/profile/:username', isLoggedIn, function (req, res) {
    res.render('profile.ejs', {
      user: req.user
    })
  })

  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  app.get('/zero', function (req, res) {
    res.header({
      page: 'zero'
    })
    res.render('zero.ejs')
  })

  /**
   *    A P I
   */

  app.post('/profile/activity', isLoggedIn, function (req, res) {
    console.log('POST, new activity')
    User.findById(req.session.passport.user, function (err, user) {
      console.log('found ' + user.username + ' by id!')
      user.addActivity(req.body.activityName)
      console.log('activity list: ' + user.activities)
    })
  })

}

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/')
  }
}
