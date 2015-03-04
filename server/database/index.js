/**
 * Created by danielmoore on 3/3/15.
 */

var mongoose = require('mongoose');
var ListModel = require('./schemas/lists');

var devDb = "mongodb://localhost/listify";

mongoose.connect(devDb);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log('Database connection successfully opened at ' + devDb);
});

exports.lists = ListModel;