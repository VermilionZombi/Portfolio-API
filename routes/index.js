let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Profile API', message: 'You cannot call my API directly.' });
});

module.exports = router;