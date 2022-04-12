const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://pattamu:iKHwECgQCaYNVpge@sandeepcluster.9rzkh.mongodb.net/Dibakar?retryWrites=true&w=majority",
{
    useNewUrlParser : true 
})
.then(  () => console.log("MongoDB is Connected"))
.catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});





//raZlRysRl56PnarX    password mongod 😊😊😊😊😊😊😊😊
