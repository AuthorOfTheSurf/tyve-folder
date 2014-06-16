var LocalStrategy = require('passport-local').Strategy;
var User          = require('../app/models/user');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
      passReqToCallback: true
    },
    function (req, username, password, done) {
      process.nextTick(function () {
        User.findOne({ 'username': username }, function (err, user) {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, false, req.flash('signupMessage', 'Someone has that nickname already!'));
          } else {
            User.constructNewUser(username, password, function () {
              console.log('Account for: ' + username + ' created & saved.');
            });
          }
        });
      });
    }));

  passport.use('local-login', new LocalStrategy({
      passReqToCallback: true
    },
    function(req, username, password, done) {
      User.findOne({ 'username': username }, function (err, user) {
        if (err) {
          return done(err);
        } else if (!user) {
          return done(null, false, req.flash('loginMessage', 'I do not know of that user.'));
        } else if (!user.validPassword(password)) {
          return done(null, false, req.flash('loginMessage', 'Wrong password, try again.'));
        } else {
          return done(null, user);
        }
      });
    }));

};