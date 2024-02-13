// isAuthenticated.js
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const User = require("../model/userModel");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization

  console.log(token, "token");
  if (!token) {
    return res.status(403).json({
      message: "Please login",
    });
  }

  try {
    // Decoding the token to extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token Decoded:', decoded);

    const doesUserExist = await User.findOne({ _id: decoded.user });
    console.log('User does exist:', doesUserExist);
    if (!doesUserExist) {
      return res.status(404).json({
        message: "User doesn't exist with that token/id",
      });
    }

    

    req.user = doesUserExist;
    console.log("req.user:", req.user);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = isAuthenticated;
