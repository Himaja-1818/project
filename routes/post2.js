var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/post2', function(req, res, next) {
    console.log(req.body);
    res.status(400).send( { 
      info :"how to make a post call?"
});
});
module.exports = router;
