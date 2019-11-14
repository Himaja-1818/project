var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
    console.log(req.query)
  res.render('add', { 
      title: 'addition',
    var1:req.query.a,
    var2:req.query.b,
    var3:req.query.c,
    var4:req.query.d,
    add:parseInt(req.query.a)+parseInt(req.query.b)+parseInt(req.query.c)+parseInt(req.query.d)
});
});
module.exports = router;
