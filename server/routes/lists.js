/**
 * Created by danielmoore on 3/2/15.
 */

var express = require('express');
var monk = require('monk');
var db = monk('localhost:27017/listify');
var router = express.Router();

router.get('/', function (req, res) {

    var lists = db.get('lists');
    lists.find({}, {limit:20}, function(e, docs) {
       res.json({
           'lists' : docs
       });
    });
});

module.exports = router;