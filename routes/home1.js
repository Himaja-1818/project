var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home1', function(req, res, next) {
  res.render('home1', { title: 'home1' });
});

module.exports = router;
