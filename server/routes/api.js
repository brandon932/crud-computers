var express = require('express');
var router = express.Router();
var Computer = require('../models/computers.js');

router.get('/computers', function(req, res, next) {
    Computer.find(function(err, computer){
        if (err) {
            res.send({"Message":err});
        }else{
            res.json(computer);
        }
    });
});

module.exports = router;
