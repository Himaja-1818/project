var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/country/:countryname', function(req, res, next) {
    console.log(req.params)
  res.render('country', { 
      title: 'India',
   ct1:req.params.countryname
});
});
module.exports = router;
