const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../model/userModel");
const catchAsync = require("../services/catchAsync");

exports.isAuthenticated = catchAsync(async (req, res, next) => {
    console.log("From Middleware: isAuthenticated-------------------------------------------------------------------------------------------------");
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({
            message: "Please login"
        });
    }
    console.log("From Middleware:", token, "----------------------------------------------------------------------");

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const doesUserExist = await User.findOne({ _id: decoded.id });
    console.log("From Middleware ___________ Decoded:", decoded, "----------------------------------------------------------------------")
    if (!doesUserExist) {
        return res.status(404).json({
            message: "From isAuthenticated Middleware: User doesn't exist with that token/id"
        });
    }

    req.user = doesUserExist;
    next();
});


