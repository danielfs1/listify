/**
 * Created by danielmoore on 3/3/15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false }
});

var List = mongoose.model('List', listSchema);

module.exports = List;