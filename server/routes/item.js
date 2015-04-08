var express = require('express');
var router = express.Router();
var db = require('../database');
var Item = db.item;

router.post('/', function(req, res) {

    console.log('test');
    var newItem = new Item({
        listId: req.body.listId,
        name: req.body.name
    });

    newItem.save(function(err) {
        var success = true;
        if(err) {
            console.log(err);
            success = false;
        } else {
            success = true;
        }
        res.json({
            'success': success,
            'error' : err
        });
    });
});

module.exports = router;