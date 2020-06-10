const express = require('express');
const passport = require('passport');
const router = express.Router();
router.get('/singup', (req, res) => {
	res.render('auth/singup');
});
router.post('/singup',passport.authenticate('local.singup', {
	successRedirect:'/profile',
  	failureRedirect: '/singup',
  	failureFlash: true,
 }));
router.get('/signin', (req, res) => {
	res.render('auth/signin');
});
router.post('/signin',(req, res, next) => {
	passport.authenticate('local.signin',{
	successRedirect: '/profile',
	failureRedirect:'/signin',
	failureFlash: true,
	})(req, res, next)
}); 
router.get('/profile', (rep, res) => {
	res.render('profile');
})
module.exports = router;
