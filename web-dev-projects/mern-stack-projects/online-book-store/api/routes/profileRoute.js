const { getMyProfile } = require("../controller/user/profile/profileController");
const isAuthenticated = require("../middleware/isAuthenticated");
const catchAsync = require("../services/catchAsync");
const cookieParser = require("cookie-parser")

const router = require("express").Router()
router.use(cookieParser());
router.route("/").get(isAuthenticated,catchAsync(getMyProfile))

module.exports = router;