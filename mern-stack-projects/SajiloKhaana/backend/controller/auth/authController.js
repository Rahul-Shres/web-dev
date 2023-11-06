const User = require('../../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../services/sendMail');

// Register a new user
exports.registerUser = async (req, res) => {
    console.log(req.body);
    const { email, password, phoneNumber } = req.body; // Destructure the request body
    if (!email || !password || !phoneNumber) {
        return res.status(400).json({
            message: "Please provide email, password, and phone number"
        });
    } 

    const userFound = await User.find({userEmail: email})
    if (userFound.length > 0) {
        return res.status(400).json({ 
            message: "User with that email already exists"
        })
    }
    try {
        // Create a new user with the provided information
        const newUser = await User.create({
            userName: 'SomeUserName', // You need to specify a username or retrieve it from the request
            userPhoneNumber: phoneNumber,
            userEmail: email,
            userPassword: bcrypt.hashSync(password, 10)
        });

        res.status(201).json({
            message: 'User created successfully',
            user: newUser // You can also send the created user in the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating the user'
        });
    }
}

// Login a user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter your email address and password"
        });
    }

    try {
        const userFound = await User.findOne({ userEmail: email });

        if (!userFound) {
            return res.status(400).json({
                message: "User with that email is not registered"
            });
        }

        if (!userFound.userPassword) {
            return res.status(500).json({
                message: "User password is not set"
            });
        }

        const isMatched = bcrypt.compareSync(password, userFound.userPassword);

        if (isMatched) {
            // Generate a token for authentication
            const token = jwt.sign({ id: userFound._id }, "this is a secret key", { expiresIn: "30d" });

            res.status(200).json({
                message: "User logged in successfully",
                token: token,
            });
        } else {
            res.status(401).json({
                message: "Invalid password"
            });
        }
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

// Send an OTP for password reset
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Please enter your valid email" });
    }

    // Check if the user is registered or not
    const userExist = await User.find({ userEmail: email })
    if (userExist.length === 0) {
        return res.status(404).json({
            message: "Email is not registered"
        });
    }

    // Generate an OTP and send it via email
    const otp = Math.floor(1000 + Math.random() * 9000);
    userExist[0].otp = otp;
    await userExist[0].save();
    await sendEmail({
        email: email,
        subject: "Hello World",
        message: `${otp}`,
    });
    res.status(200).json({
        message: "Email sent"
    });
}

// Verify OTP
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(404).json({
            message: "Please enter your email address and OTP"
        });
    }

    // Check if the OTP is correct
    const userExists = await User.find({ userEmail: email });
    if (userExists.length === 0) {
        return res.status(404).json({
            message: "Email is not registered"
        });
    }
    if (userExists[0].otp != otp) {
        res.status(400).json({
            message: "Invalid OTP"
        });
    } else {
      userExists[0].otp = undefined;
      userExists[0].isOtpVerified = true;
      await userExists[0].save();
        res.status(200).json({
            message: "OTP is correct"
        });
    }
}


exports.resetPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;
  if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
          message: "Please provide email, new password, and confirmed password"
      });
  }
  if (newPassword !== confirmPassword) {
      return res.status(400).json({
          message: "New password does not match confirm password"
      });
  }

  const userExist = await User.find({ userEmail: email });
  if (userExist.length === 0) {
      return res.status(400).json({
          message: "User is not registered"
      });
  }

  if(userExists[0].isOtpVerified !== true){
    return res.status(403).json({
        message: "You cannot perform this action"
    })
  }

  userExist[0].userPassword = bcrypt.hashSync(newPassword, 10);
  userExist[0].isOtpVerified = false;
  await userExist[0].save();

  res.status(200).json({
      message: "Password changed successfully"
  });
};
