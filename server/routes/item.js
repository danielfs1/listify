var express = require('express');
var router = express.Router();
var db = require('../database');
var Item = db.item;

router.post('/', function(req, res) {
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

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);

    Item.findByIdAndRemove(id, function(err) {
        var success = true;
        if(err) {
            console.log(err);
            success = true;
        }
        res.json({
            'success' : success,
            'error' : err
        });
    });
});

router.get('/:id', function(req, res) {
    var id = req.param.id;

    Item.findOne({
        '_id' : id
    }, function(err, item) {
        var success = true;
        if(err) {
            console.log(err);
            success = false;
        }
        res.json({
            'success' : success,
            'err' : err,
            'item' : item
        });
    });
});



module.exports = router;