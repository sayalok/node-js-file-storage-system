const express = require('express');

// Init routes
const apiRoute = require('./api')
const webRoute = require('./web')

const app = express();

// Init routing
app.use('/api', apiRoute);
app.use('/admin', webRoute);

module.exports = app
