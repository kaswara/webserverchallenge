// The server
// import required tools
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Get routes
const routes = require('./routes/routes.js')(app, fs);
// Launch the server on port 3001.
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
};
app.listen(port);
console.log('listening on port %s...', port);

