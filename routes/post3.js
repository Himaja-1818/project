var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/post3', function(req, res, next) {
    console.log(req.body);
    res.status(500).send( { 
      info :9751558565
    });
});
module.exports = router;
