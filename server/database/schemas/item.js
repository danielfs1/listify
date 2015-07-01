var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    listId: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    name: { type: String, required: true }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
