const router = require('express').Router();
const { getRegister, register, getLogin, login, getLogout, getForgotPassword, renderOtpForm, handleOTP, checkForgotPassword, renderGetPasswordForm, handlePasswordChange  } = require('../controller/authController');
const catchError = require('../services/catchError');

router.route('/register').get(getRegister).post(catchError(register));
router.route('/login').get(getLogin).post(catchError(login));
router.route('/logout').get(getLogout);
router.route('/forgotPassword').get(getForgotPassword).post(catchError(checkForgotPassword));
router.route('/otp').get(renderOtpForm)
router.route('/otp/:id').post(catchError(handleOTP))
router.route('/passwordChangeForm').get(renderGetPasswordForm);
router.route('/passwordChangeForm/:email/:otp').post(catchError(handlePasswordChange));
module.exports = router;





// app.get('/register', getRegister);
// app.post('/register', register);
// app.get('/login', getLogin);
// app.post('/login', login);