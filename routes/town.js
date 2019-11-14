var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/town/:townname', function(req, res, next) {
    console.log(req.params)
  res.render('town', { 
      title: 'krishnagiri',
   c1:req.params.townname
});
});
module.exports = router;
