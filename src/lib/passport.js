const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use("local.singup", new LocalStrategy(
 {
	usernameField:'username',
  	passwordField:'password',
  	passReqToCallback: true,
 }, async (req, username, password, done) => {
	console.log(req.body);
 }
));
