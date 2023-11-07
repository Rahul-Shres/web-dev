const User = require("./model/userModel");
const bcrypt = require("bcrypt");

const adminSeeder = async () => {
  // Check if an admin user exists
  const adminExists = await User.findOne({ userEmail: "ppxn@example.com" });

  if (!adminExists) {
    // Create the admin user
    await User.create({
      userEmail: "pxn@example.com",
      userPassword: bcrypt.hashSync('admin', 10), // Fixed the bcrypt.hashSync argument
      userPhoneNumber: "123456",
      userName: "admin",
      role: "admin",
    });
    console.log("Admin seeded successfully");
  } else {
    console.log("Admin already seeded");
  }
};

module.exports = adminSeeder;
