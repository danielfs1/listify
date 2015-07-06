var express = require('express');
var router = express.Router();
var db = require('../database');
var List = db.lists;
var Item = db.item;

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    List.findByIdAndRemove(id, function (err) {
      res.json({
         'err': err
      });
    });
});

router.get('/', function (req, res) {
  List.find({}, function(err, lists) {
      if(lists) {
          res.json(lists);
      }
  });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;

    List.findOne({
        '_id': id
    }, function (err, list) {
        if(err) {
            console.log(err);
        }
        if(list) {
            Item.find({
                'listId' : id
            }, function (err, items) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        'list': list,
                        'items': items
                    });
                }
            });
        }
    });
});

router.post('/', function(req, res) {
    var newList = new List({
        name: req.body.name,
        update: new Date
    });

    newList.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            // Return Lists
            List.find({}, function (err, lists) {
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
