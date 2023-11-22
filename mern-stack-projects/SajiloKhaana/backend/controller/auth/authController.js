const User = require('../../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../services/sendMail');

// Register a new user
exports.registerUser = async (req, res) => {
    const { email, password, phoneNumber } = req.body;

    // Ensure required fields are provided
    if (!email || !password || !phoneNumber) {
        return res.status(400).json({
            message: "Please provide email, password, and phone number"
        });
    }

    try {
        // Check if the user with the given email already exists
        const userFound = await User.findOne({ userEmail: email });

        if (userFound) {
            return res.status(400).json({ 
                message: "User with that email already exists"
            });
        }

        // Create a new user with the provided information
        const newUser = await User.create({
            userName: 'SomeUserName', // You need to specify a username or retrieve it from the request
            userPhoneNumber: phoneNumber,
            userEmail: email,
            userPassword: bcrypt.hashSync(password, 10)
        });

        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating the user'
        });
    }
};

// Login a user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Ensure email and password are provided
    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter your email address and password"
        });
    }

    try {
        const userFound = await User.findOne({ userEmail: email });

        if (!userFound || !userFound.userPassword) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isMatched = bcrypt.compareSync(password, userFound.userPassword);

        if (isMatched) {
            const token = jwt.sign({ id: userFound._id }, process.env.SECRET_KEY, { expiresIn: "30d" });

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
};

// Send an OTP for password reset
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    // Ensure email is provided
    if (!email) {
        return res.status(400).json({ message: "Please enter your valid email" });
    }

    try {
        const userExist = await User.findOne({ userEmail: email });

        if (!userExist) {
            return res.status(404).json({
                message: "Email is not registered"
            });
        }

        const otp = Math.floor(1000 + Math.random() * 9000);
        userExist.otp = otp;
        await userExist.save();
        await sendEmail({
            email: email,
            subject: "Hello World",
            message: `${otp}`,
        });
        res.status(200).json({
            message: "Email sent"
        });
    } catch (error) {
        console.error("Error in forgot password route:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    // Ensure email and OTP are provided
    if (!email || !otp) {
        return res.status(400).json({
            message: "Please enter your email address and OTP"
        });
    }

    try {
        const userExists = await User.findOne({ userEmail: email });

        if (!userExists || userExists.otp != otp) {
            res.status(400).json({
                message: "Invalid OTP or email"
            });
        } else {
            userExists.otp = undefined;
            userExists.isOtpVerified = true;
            await userExists.save();
            res.status(200).json({
                message: "OTP is correct"
            });
        }
    } catch (error) {
        console.error("Error in verify OTP route:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

// Reset Password
exports.resetPassword = async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body;

    // Ensure required fields are provided
    if (!email || !newPassword || !confirmPassword) {
        return res.status(400).json({
            message: "Please provide email, new password, and confirmed password"
        });
    }

    // Check if user exists and OTP is verified
    const userExist = await User.findOne({ userEmail: email });

    if (!userExist) {
        return res.status(400).json({
            message: "User is not registered"
        });
    }

    if (!userExist.isOtpVerified) {
        return res.status(403).json({
            message: "OTP verification required"
        });
    }

    // Validate new password and update it
    if (newPassword !== confirmPassword) {
        return res.status(400).json({
            message: "New password does not match confirm password"
        });
    }

    userExist.userPassword = bcrypt.hashSync(newPassword, 10);
    userExist.isOtpVerified = false;
    await userExist.save();

    res.status(200).json({
        message: "Password changed successfully"
    });
};

