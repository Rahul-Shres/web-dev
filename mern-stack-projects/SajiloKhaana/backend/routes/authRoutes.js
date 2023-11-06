const { registerUser, loginUser, forgotPassword, verifyOtp, resetPassword} = require('../controller/auth/authController');

const router = require("express").Router();

// Register route as POST
router.post("/register", registerUser);

// Login route as POST
router.post("/login", loginUser);

// Add a forward slash before "forgotPassword" and define it as POST
router.post("/forgotPassword", forgotPassword);
router.post("/verifyOtp", verifyOtp);
router.post("/resetPassword", resetPassword);

module.exports = router;
