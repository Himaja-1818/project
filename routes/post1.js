var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/post1', function(req, res, next) {
    console.log(req.body);
    res.status(400);
  res.send( { 
      info :"response received successfully"
});
});
module.exports = router;
