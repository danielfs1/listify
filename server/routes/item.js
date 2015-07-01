var express = require('express');
var router = express.Router();
var db = require('../database');
var Item = db.item;
var List = db.lists;

router.post('/', function(req, res) {
    var listId = req.body.listId;
    var newItem = new Item({
      listId: req.body.listId,
      name: req.body.name
    });

    console.log(listId);
    List.findOne({
        '_id': listId
    }, function (err, list) {
      if(err) {
        console.log(err);
      } else {
        list.updated = new Date;
        list.save(function(err) {
          console.log(err);
        });
      }
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
