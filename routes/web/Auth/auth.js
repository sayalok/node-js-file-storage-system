const express = require('express');

// Controller
const authController = require('./../../../app/controllers/admin/Authentication/auth')

const IsGuest = require('./../../../app/middleware/IsGuest')

const router = express.Router();
router.get('/login', IsGuest, authController.getLogin);
router.post('/login',IsGuest, authController.post_login);

router.post('/logout', authController.postLogout);

module.exports = router