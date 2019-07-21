// The server
// import required tools
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Get routes
const routes = require('./routes/routes.js')(app, fs);
// Launch the server on port 3001.
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
