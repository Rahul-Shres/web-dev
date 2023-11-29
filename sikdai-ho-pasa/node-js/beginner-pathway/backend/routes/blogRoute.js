const { renderRegister, registerNewUser, Renderlogin, login } = require('../controller/auth/authController');

const router = require('express').Router();


router.route('/register').get(renderRegister).post(registerNewUser)
router.route('/login').get(Renderlogin).post(login)


module.exports = router;