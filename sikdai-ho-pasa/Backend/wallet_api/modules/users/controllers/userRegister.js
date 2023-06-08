const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  const Users = mongoose.model("users");
  console.log(req.body);

  const { name, email, password, balance, address } = req.body;
  const enPassword = await bcrypt.hash(password, 10);

  try {
    const createdUser = await Users.create({
      name,
      email,
      password: enPassword,
      balance,
      address,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
    return;
  }

  res.status(200).json({
    status: "hello from userRegister",
  });
};

module.exports = userRegister;
