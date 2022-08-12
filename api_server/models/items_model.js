const mongoose = require('mongoose')

let items_schema = mongoose.Schema({
    category:{type: String, required: true},
    item_name:{type: String, required: true},
    price:{type: Number, required: true},
    quantity:{type: Number, required: true},
})

module.exports = mongoose.model('items', items_schema)