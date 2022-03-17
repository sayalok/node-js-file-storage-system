const express = require("express");

const fileUpload = require("./../../../app/util/file_handler");
//Middleware
const isAuthenticated = require("./../../../app/middleware/CheckAuth");

// Schema
const UserProfileUpdateSchema = require("./../../../app/Schema/UserProfileUpdateSchema");

// Controller
const userController = require("./../../../app/controllers/api/User/user");
const forgetPassword = require("./../../../app/controllers/api/forgetPassowrd/forget_password_controller");
const router = express.Router();

router.post("/user_details", isAuthenticated, userController.user_details);
router.post(
  "/user_update",
  UserProfileUpdateSchema,
  isAuthenticated,
  userController.user_profile_update
);
router.post(
  "/upload_avatar",
  fileUpload("image", "input_user_photo"),
  isAuthenticated,
  userController.profile_pic_upload
);

router.post("/verify-create", forgetPassword.createVerification);
router.post("/verify-otp", forgetPassword.verifyOtp);
router.post("/update-password", forgetPassword.updatePassword);

module.exports = router;
