const express = require('express');


// Middleware
const isAuthenticated = require(__root_path+'app/middleware/CheckAuth');

// Controller
const fileStorageController = require(__root_path+'app/controllers/api/file_storage/index')

const router = express.Router();

router.post("/upload_files",  fileUpload("image", "input_user_photo"), isAuthenticated, fileStorageController.upload_file);

module.exports = router