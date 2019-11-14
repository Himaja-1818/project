var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name/:name1', function(req, res, next) {
    console.log(req.params)
  res.render('name', { 
      title: 'himaja',
   c1:req.params.name1
});
});
module.exports = router;
