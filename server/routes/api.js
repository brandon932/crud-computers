var express = require('express');
var router = express.Router();
var Computer = require('../models/computers.js');

router.get('/computers', function(req, res, next) {
    Computer.find(function(err, computers){
        if (err) {
            res.send({"Message":err});
        }else{
            res.json(computers);
        }
    });
});
router.get('/computer/:id', function(req, res, next) {
    Computer.findById(req.params.id, function(err, computer){
        if(err) {
            res.send({"message":err});
        }else{
            res.json(computer);
        }
    });
});
router.post('/computers', function(req, res, next){
    newComputer = new Computer(req.body);
    newComputer.save(function(err, computer){
        res.json(computer);
    });
});
router.put('/computer/:id', function(req,res,next){
    var options = {"new":true};
    Computer.findByIdAndUpdate(req.params.id, req.body, options, function(err, computer){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(computer);
        }
    });
});
router.delete('/computer/:id', function(req, res, next){
    Computer.findByIdAndRemove(req.params.id, function(err, computer){
        if (err) {
            res.send({"message":err});
        }else{
            res.send({"message":"success!"});
        }
    });
});

module.exports = router;
