const express = require('express');

const fileUpload = require(__root_path+"app/util/file_handler");

// Middleware
const isAuthenticated = require(__root_path+'app/middleware/CheckAuth');

// Controller
const fileStorageController = require(__root_path+'app/controllers/api/file_storage/index')

const router = express.Router();

router.post("/files",  fileUpload("image", "input_photo"), isAuthenticated, fileStorageController.upload_file);
router.get("/files/:publickey",  isAuthenticated, fileStorageController.get_file);
router.delete("/files/:privatekey",   isAuthenticated, fileStorageController.delete_file);

module.exports = router