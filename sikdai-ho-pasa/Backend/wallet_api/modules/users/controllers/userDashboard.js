const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      throw new Error("User ID not found");
    }

    const User = mongoose.model("users");
    const getUserData = await User.findOne({ _id: req.user._id }).select(
      "balance"
    );

    if (!getUserData) {
      throw new Error("User not found");
    }

    res.status(200).json({
      data: getUserData,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = userDashboard;
