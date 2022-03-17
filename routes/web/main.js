const express = require('express');
const IsAuth = require('../../app/middleware/IsAuth')

// Controller
const mainController = require('../../app/controllers/admin/main')

const router = express.Router();
router.get('', IsAuth, mainController.getHome);


module.exports = router