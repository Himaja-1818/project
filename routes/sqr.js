var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sqr', function(req, res, next) {
    console.log(req.query)
  res.render('sqr', { 
      title: 'sum of squares',
    var1:req.query.a,
    var2:req.query.b,
    var3:req.query.c,
    var4:req.query.d,
    sqr:Math.pow(parseInt(req.query.a),2)+Math.pow(parseInt(req.query.b),2)+Math.pow(parseInt(req.query.c),2)+Math.pow(parseInt(req.query.d),2)
});
});
module.exports = router;
