const express = require('express');

// Schema
const LoginSchema = require('./../../../app/Schema/LoginSchema');

// Middleware
const isAuthenticated = require('./../../../app/middleware/CheckAuth');

// Controller
const authController = require('./../../../app/controllers/api/authentication/user_auth')

const router = express.Router();

router.post('/login', LoginSchema, authController.user_login);
router.post('/logout', isAuthenticated, authController.user_logout);

module.exports = router