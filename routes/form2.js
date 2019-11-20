var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.post('/form2', function(req, res, next) {
console.log(req.body)

fs.readFile('./config/credentials.json',(err,data)=>{
    console.log(`file data is ${data.username}`);
    console.log(typeof(data));
    const parsedData = JSON.parse(data);
    console.log(parsedData.username);
    console.log(typeof( parsedData.username));
    console.log(typeof( req.body.uname));
    console.log(req.body.uname);
    if ((parsedData.username == req.body.uname) && (parsedData.password == req.body.pw) ) {
        res.render('home1', { 
            title:'form2 page'
        });
    } else {
        res.render('error');
    }

})

});
module.exports = router;
