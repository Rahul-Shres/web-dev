const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const Users = mongoose.model("users");
  const { email, password } = req.body;
  console.log(req.body);
  // Validation

  try {
    if (!email) throw new Error("Please provide an email");
    if (!password) throw new Error("Please provide a password");
    // Finding if user exists
    const getUser = await Users.findOne({ email: email });

    if (!getUser) throw new Error("User not found");

    // Comparing Password
    const matched = await bcrypt.compare(password, getUser.password);
    if (!matched) throw new Error("Email and password do not match");

    // JWT
    const accessToken = jwt.sign(
      {
        _id: getUser._id,
        email: getUser.email,
        password: getUser.password,
      },
      process.env.jwt_salt,
      {
        expiresIn: "90 days",
      }
    );

    res.status(200).json({
      status: "User login",
      accessToken,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = userLogin;
