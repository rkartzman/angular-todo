// setup =================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// config ===================
// load config
var database = require('./config/database');
mongoose.connect(database.url); // connect to mongoose database 

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());




// load the routes
require('./app/routes')(app);




// listen ======================

app.listen(8080);
console.log('App listening on port 8080');