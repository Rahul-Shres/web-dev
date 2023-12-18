const { registerUser, loginUser, forgotPassword, verifyOTP, resetPassword } = require('../controller/auth/authController');
const router = require('express').Router(); // Ensure to invoke Router as a function

router.route("/register").post(registerUser)
router.route('/login').post(loginUser)
router.route("/forgotPassword").post(forgotPassword)
router.route('/verifyOtp').post(verifyOTP) 
router.route('/resetPassword').post(resetPassword) 
module.exports = router;