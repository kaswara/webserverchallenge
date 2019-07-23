// The server
// import required tools
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Get routes
var routes = require('./routes/routes.js')(app, fs);
// Launch the server 
var port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
};
app.listen(port);
console.log('listening on port %s...', port);

