const router = require('express').Router();
const { getRegister, register, getLogin, login  } = require('../controller/authController');

router.route('/register').get(getRegister).post(register);
router.route('/login').get(getLogin).post(login);


module.exports = router;





// app.get('/register', getRegister);
// app.post('/register', register);
// app.get('/login', getLogin);
// app.post('/login', login);