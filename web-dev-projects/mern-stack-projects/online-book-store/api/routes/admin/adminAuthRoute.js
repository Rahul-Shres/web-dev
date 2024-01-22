const { registerAdmin, loginAdmin, forgotPassword, verifyOtp, resetPassword } = require('../../controller/admin/auth/authController');
const catchAsync = require('../../services/catchAsync');

const router = require('express').Router(); // Ensure to invoke Router as a function


router.route("/register").post(catchAsync(registerAdmin))
router.route('/login').post(catchAsync(loginAdmin))
router.route("/forgotPassword").post(catchAsync(forgotPassword))
router.route('/verifyOtp').post(catchAsync(verifyOtp))
router.route('/resetPassword').post(catchAsync(resetPassword))
module.exports = router;