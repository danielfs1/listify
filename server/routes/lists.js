/**
 * Created by danielmoore on 3/2/15.
 */

var express = require('express');
var db = require('../database');
var Lists = db.lists;
var router = express.Router();

router.get('/', function (req, res) {

    // Return lists
    Lists.find({}, function(err, lists) {
        if(lists) {
            res.json(lists);
        }
    });

});

module.exports = router;
