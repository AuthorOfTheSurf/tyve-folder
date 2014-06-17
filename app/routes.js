module.exports = function (app, passport) {

  app.get('/', function (req, res) {
    res.render('index.jade');
  });

  app.get('/login', function (req, res) {
    res.render('login.jade', {
      message: req.flash('loginMessage')
    });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/signup', function (req, res) {
    res.render('signup.jade', {
      message: req.flash('signupMessage')
    });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile.jade', {
      user: req.user
    });
  });

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

};

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/')
  }
}

// app.get('/api/users', function (req, res) {
//   return db.User.find(function (err, users) {
//     if (!err) {
//       return res.send(users)
//     } else {
//       return console.log(err)
//     }
//   })
// })

// app.post('/api/users', function (req, res) {
//   var newUser = new db.User({
//     username: req.body.username,
//     activities: [],
//     stats: new db.Statistics({})
//   })
//   newUser.save(function (err) {
//     if (!err) {
//       return console.log('POST: new user ' + req.body.username)
//     } else {
//       return console.log(err)
//     }
//   })
//   return res.send(newUser)
// })

