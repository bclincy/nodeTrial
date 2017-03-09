var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
// use express layouts;
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyparser.json());
// Connect to mongoose
mongoose.connect('mongodb://localhost/datastore');
var db = mongoose.connection;
// app routes
var router = require('./app/routes');
app.use('/', router);
// Setting our Static file (css, img, etc) location
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function () {
  console.log('http://localhost:' + port);
});
