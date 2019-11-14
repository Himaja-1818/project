var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sub', function(req, res, next) {
    console.log(req.query)
  res.render('sub', { 
      title: 'subtraction',
    var1:req.query.a,
    var2:req.query.b,
    var3:req.query.c,
    var4:req.query.d,
    sub:parseInt(req.query.a)-parseInt(req.query.b)});
});
module.exports = router;
