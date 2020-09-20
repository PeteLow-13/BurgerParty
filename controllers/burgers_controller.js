const express = require('express');

const router = express.router();

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
    burgers.create

    
});

router.put('/api/burgers/:id', function(req,res){
    var conditon
})

module.exports =router;