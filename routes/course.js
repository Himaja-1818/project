var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/course/:coursename', function(req, res, next) {
    console.log(req.params)
  res.render('course', { 
      title: 'aws',
   c1:req.params.coursename
});
});
module.exports = router;
