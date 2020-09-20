const express = require('express');

const router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req,res){
    burgers.create([
        'name', 'devoured'
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });    
});

router.put('/api/burgers/:id', function(req,res){
    var conditon = 'id = ' + req.params.id;

    console.log('condition', condition);

    burgers.update({
        devoured: req.body.devoured
    }, conditon, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports =router;