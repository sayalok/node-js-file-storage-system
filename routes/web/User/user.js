const express = require('express');

// Controller
const userController = require('./../../../app/controllers/admin/User/user')
const IsAuth = require('./../../../app/middleware/IsAuth')

const router = express.Router();

router.get('', IsAuth, userController.userList);
router.get('/create_user', IsAuth, userController.getCreateUser);
router.post('/create_user', IsAuth, userController.postCreateUser);
router.get('/details/:userid', IsAuth, userController.userDetails);
router.post('/status',IsAuth, userController.user_status_update);

module.exports = router