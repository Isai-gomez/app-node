const express = require('express');
const router = express.Router();
router.get('/',(req, res) => {
res.send('Helllo wordl'); 
});
module.exports = router; 


