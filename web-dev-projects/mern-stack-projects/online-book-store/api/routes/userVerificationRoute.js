const { associateCounselorAndPhoneNumber } = require("../controller/user/profile/profileController");
const catchAsync = require("../services/catchAsync");

const router = require("express").Router()
router.route("/").post(catchAsync(associateCounselorAndPhoneNumber))

module.exports = router;