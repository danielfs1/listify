/**
 * Created by danielmoore on 3/3/15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listSchema = new Schema({
    name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

var List = mongoose.model('List', listSchema);

module.exports = List;
