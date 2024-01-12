const { verifyPidx, initiateKhaltiPayment } = require("../../controller/user/payment/paymentController")
const { isAuthenticated } = require("../../middleware/isAuthenticated")
const catchAsync = require("../../services/catchAsync")


const router = require("express").Router()


router.route("/").post(isAuthenticated,catchAsync(initiateKhaltiPayment))
router.route("/success").post(isAuthenticated, catchAsync(verifyPidx))



module.exports = router