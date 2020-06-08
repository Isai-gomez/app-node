const express = require('express');
const router = express.Router();
router.get('/singup', (req, res) => {
	res.render('auth/singup');
});
router.post('/singup', (req, res) => {
 console.log(req.body);
 res.send('Recieved');
});
module.exports = router;
