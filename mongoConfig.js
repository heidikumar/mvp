

//Honestly, I used solution code from another sprint to set this config up. It's about the same as Mongo's tutorial anyway.

var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/mixtapedb';
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;