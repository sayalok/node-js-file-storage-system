const express = require("express");
const router = express.Router();
//Middleware
const isAuthenticated = require("./../../../../app/middleware/CheckAuth");

// controller import
const waterController = require("./../../../../app/controllers/api/waterConsume/water_consume_controller");
const { route } = require("../user");

router.post(
  "/store-water-consumer",
  isAuthenticated,
  waterController.storeConsume
);
router.get(
  "/get-water-consumer",
  isAuthenticated,
  waterController.getUserConsumeList
);

module.exports = router;
