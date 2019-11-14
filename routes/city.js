var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/city/:cityname', function(req, res, next) {
    console.log(req.params)
  res.render('city', { 
      title: 'bangalore',
   c1:req.params.cityname
});
});
module.exports = router;
