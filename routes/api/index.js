const express = require('express');

// const isAuthenticated = require("./../../app/middleware/CheckAuth");

const authRoutes = require('./Authentication/auth');
const userRoutes = require('./User/user');


const app = express();

app.use(authRoutes);
app.use(userRoutes);

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