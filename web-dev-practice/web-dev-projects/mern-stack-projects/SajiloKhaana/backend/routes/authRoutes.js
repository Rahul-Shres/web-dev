const { registerUser, loginUser, forgotPassword, verifyOtp, resetPassword} = require('../controller/auth/authController');
const catchAsync = require('../services/catchAsync');

const router = require("express").Router();

// Register route as POST
router.post("/register", registerUser);

// Login route as POST
router.post("/login", loginUser);

// Add a forward slash before "forgotPassword" and define it as POST
router.post("/forgotPassword", catchAsync(forgotPassword));
router.post("/verifyOtp", catchAsync(verifyOtp));
router.post("/resetPassword", catchAsync(resetPassword));

module.exports = router;
