var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/post4', function(req, res, next) {
    console.log(req.body);
    res.status(100);
  res.send( { 
      info1 :req.body
});
});
module.exports = router;
