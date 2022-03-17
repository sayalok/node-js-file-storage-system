const express = require('express');

// Init routes
const apiRoute = require('./api')

const app = express();

// Init routing
app.use('/api', apiRoute);

module.exports = app
