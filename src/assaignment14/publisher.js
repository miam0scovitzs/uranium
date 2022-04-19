const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    publisher_id: String,
    publisher_name: String,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('publisher', publisherSchema)
