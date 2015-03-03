/**
 * Created by danielmoore on 3/2/15.
 */

var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/listify');

router.delete('/:id', function (req, res) {
    var id = req.param('id');

    var lists = db.get('lists');
    lists.remove({ _id : id });

    lists.find({}, {limit:20}, function(e, docs) {
        res.json({
            'lists' : docs
        });
    });

});

router.post('/', function(req, res) {
    var lists = db.get('lists');
    lists.insert({ name : req.body.name });
    lists = db.get('lists');
    lists.find({}, {limit:20}, function(e, docs) {
        res.json({
            'lists' : docs
        });
    });
});

module.exports = router;