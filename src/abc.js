const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    mobileno:{
        type: String,
        unique: true,
        required: true,
    }
},{timestamps:true});
module.exports = mongoose.model('user',userSchema)