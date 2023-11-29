const { renderRegister, registerNewUser, Renderlogin, login } = require('../controller/userController');

const router = require('express').Router();


router.route('/register').get(renderRegister).post(registerNewUser)
router.route('/login').get(Renderlogin).post(login)


module.exports = router;