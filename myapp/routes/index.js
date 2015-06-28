var passport = require('passport');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

router.get('/login', function(req, res, next) {
  //res.render('login', {message : req.flash('loginMessage')});
  res.render('login', {message : 'loginMessage'});
});

router.get('/signup', function(req, res, next) {
  res.render('signup.ejs', {message : 'signupMessage'});
});

router.get('/profile', function(req, res, next) {
  res.render('profile.ejs', {user : req.user});
});

router.get('/logout', function(req, res, next) {
  res.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
module.exports = router;
