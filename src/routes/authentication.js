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
router.get('/profile', (rep, res) => {
	res.send('This is yuor Profile');
})
module.exports = router;
