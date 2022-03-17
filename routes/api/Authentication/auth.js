const express = require('express');

// Schema
const LoginSchema = require(__root_path+'app/Schema/LoginSchema');

// Middleware
const isAuthenticated = require(__root_path+'app/middleware/CheckAuth');

// Controller
const authController = require(__root_path+'app/controllers/api/authentication/user_auth')

const router = express.Router();

router.post('/login', LoginSchema, authController.user_login);
router.post('/logout', isAuthenticated, authController.user_logout);

module.exports = router