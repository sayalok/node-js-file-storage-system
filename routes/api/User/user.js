const express = require("express");

const fileUpload = require("./../../../app/util/file_handler");
//Middleware
const isAuthenticated = require("./../../../app/middleware/CheckAuth");


// Controller
const userController = require("./../../../app/controllers/api/User/user");

const router = express.Router();

router.post("/user_details", isAuthenticated, userController.user_details);

router.post(
  "/upload_avatar",
  fileUpload("image", "input_user_photo"),
  isAuthenticated,
  userController.profile_pic_upload
);



module.exports = router;
