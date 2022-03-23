const express = require('express');

const authRoutes = require('./Authentication/auth');
const fileHandlerRoutes = require('./FileStorage/index');

const app = express();

app.use(authRoutes);
app.use(fileHandlerRoutes);

// Error handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;