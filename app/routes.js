var User = require('./models/user')

module.exports = function (app, passport) {

  app.get('/', function (req, res) {
    res.render('index.html')
  })

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/#/login',
    failureFlash: true
  }))

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/#/signup',
    failureFlash: true
  }))

  app.get('/profile', function (req, res) {
    res.redirect('/profile/' + req.user.username)
  })

  app.get('/profile/:username', isLoggedIn, function (req, res) {
    res.render('profile.html', {
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
    res.render('zero.html')
  })

  /**
   *    A P I
   */

  app.post('/profile/activity', isLoggedIn, function (req, res) {
    User.findById(req.session.passport.user, function (err, user) {
      user.addActivity(req.body.activityName)
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
