const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function(req,res){
    burger.selectAll(function(data){
        res.render('index', { burger: data });
    });
});

router.post('/api/burgers', function(req,res){
    burger.insertOne(req.body.burger_name,
        // console.log(result);
        // res.redirect('/');
        function(result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
    });    
});

router.put('/api/burgers/:id', function(req,res){
    burger.updateOne(
        req.params.id,
        function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', function(req,res){
    var condition = 'id = ' + req.params.id;

    burger.deleteOne(condition, function(result){
        console.log(result)
        if (result.affectedRows == 0) {
            // return res.status(404).end();
            console.log('line 43')
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;