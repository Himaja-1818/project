var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.post('/validate', function(req, res, next) {
console.log(req.body)
fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
     console.log(`file data is ${data.username}`);
    console.log(typeof(data));
    const parsedData = JSON.parse(data);
    console.log(typeof(parsedData));
    
    if (parsedData.username === req.body.uname && parsedData.password === req.body.pwd ) {
        res.render('home', { 
            title:'validate page'
        });
    } else {
        res.render('error');
    }

})

});
module.exports = router;
