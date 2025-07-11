const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);
router.post("/refresh-token", authController.refreshToken);

module.exports = router;
