const {createAdmin, loginAdmin} = require("../controller/adminController")
const router = require("express").Router()

router.route('/adminRegister').post(createAdmin)
router.route('/adminLogin').post(loginAdmin)

module.exports = router;