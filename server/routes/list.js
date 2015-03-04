/**
 * Created by danielmoore on 3/2/15.
 */

var express = require('express');
var router = express.Router();
var db = require('../database');
var Lists = db.lists;

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    Lists.findByIdAndRemove(id, function (err, list) {});

    // Return lists
    Lists.find({}, function(err, lists) {
       if(lists) {
           res.json({
              'lists': lists
           });
       }
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;

    Lists.findOne({
        '_id': id
    }, function (err, list) {
        console.log(list);
        if(err) {
            console.log(err);
        }
        if(list) {
            res.json({
               'list': list
            });
        }
    });
});

router.post('/', function(req, res) {

    var newList = new Lists({
        name: req.body.name
    });

    newList.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            // Return Lists
            Lists.find({}, function (err, lists) {
                console.log(lists);
                if(lists) {
                    res.json({
                        'lists': lists
                    })
                }
            });
        }
    });

});

module.exports = router;