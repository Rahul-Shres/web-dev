const { registerUser, loginUser, forgotPassword, verifyOTP, resetPassword } = require('../../controller/auth/authController');
const catchAsync = require('../../services/catchAsync');
const router = require('express').Router(); // Ensure to invoke Router as a function

router.route("/register").post(catchAsync(registerUser))
router.route('/login').post(catchAsync(loginUser))
router.route("/forgotPassword").post(catchAsync(forgotPassword))
router.route('/verifyOtp').post(catchAsync(verifyOTP))
router.route('/resetPassword').post(catchAsync(resetPassword))
module.exports = router;


