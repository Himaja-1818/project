var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/info', function(req, res, next) {
    console.log(req.body);
    res.status(400);
  res.render('info', { 
      info :req.body
});
});
module.exports = router;
