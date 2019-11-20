var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/form1', function(req, res, next) {

  res.render('form1', { 
      title:'welcome'
});
});
module.exports = router;
