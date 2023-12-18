const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/userModel');
const sendEmail = require('../../services/sendEmail');

exports.registerUser = async (req, res) => {
    const { email, username, password, phoneNumber } = req.body;

    console.log(email, username, password, phoneNumber);

    if (!email || !username || !password || !phoneNumber) {
        return res.status(400).send("Please enter a valid email, username, password, and phoneNumber");
    }

    try {
        // Check if user with that email already exists
        const userFound = await User.find({ userEmail: email });

        if (userFound.length > 0) {
            return res.status(400).json({ message: "User with that email already exists" });
        }

        // Create a new user instance using the User model
        const newUser = new User({
            userEmail: email,
            userName: username,
            // Hashing password
            userPassword: bcrypt.hashSync(password, 10),
            userPhoneNumber: phoneNumber
            // You might want to add validation or checks before saving to the database
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        console.log('User registered:', savedUser);
        res.status(200).json({ message: 'User registered successfully', user: savedUser });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Could not register user' });
    }
}
 

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please enter both email and password");
    }

    try {
        const user = await User.find({ userEmail: email });

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const hashedPasswordFromDB = user[0].userPassword;
        console.log("Hashed Password from DB:", hashedPasswordFromDB);

        const passwordMatch = await bcrypt.compareSync(password, hashedPasswordFromDB);

        console.log("Password Match Result:", passwordMatch);
        // generate token
         // Generate a JWT token upon successful login
        //  const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '100h' });
         const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

         // Return the token as part of the login response
         res.status(200).json({ message: "Login successful", token: token, user });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Login failed' });
    }
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(401).json({ message: "Please provide an email address" });
    }

    try {
        // check if that email is registered or not
        const userExist = await User.find({ userEmail: email })
        if (userExist.length === 0) {
            return res.status(401).json({ message: "Email not registered" });
        }

        // send OTP to the user's provided email
        const otp = Math.floor(1000 + Math.random() * 9000);
        //saving otp in database
        userExist[0].otp = otp;
        await userExist[0].save();

        await sendEmail({
            email: email, // Use the provided email here
            subject: 'Reset Password',
            message: `Your OTP is ${otp}`
        })

        res.json({
            message: "Email sent successfully"
        })
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ error: 'Failed to send email' });
    }
}

//verify otp
exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(500).json({ error: 'Please provide email and otp' });
    }

    const userExists = await User.find({ userEmail: email });
    if (userExists.length === 0) {
        return res.status(404).json({
            message: "Email is not registered"
        });
    }

    if (userExists[0].otp !== otp) {
        return res.status(404).json({
            message: "OTP is not valid"
        });
    } else {
        userExists[0].otp = null;
        userExists[0].isOtpVerified = true;
        await userExists[0].save();
        return res.status(200).json({
            message: "OTP is valid"
        });
    }
};



exports.resetPassword = async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body;
    
    if (!email || !newPassword || !confirmPassword) {
        return res.status(400).json({
            message: "Please provide email, newPassword, and confirmPassword"
        });
    }

    try {
        const userExists = await User.find({ userEmail: email });

        if (userExists.length === 0) {
            return res.status(404).json({
                message: "Email is not registered"
            });
        }

        if (!userExists[0].isOtpVerified) {
            return res.status(403).json({
                message: "You cannot perform this action"
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                message: "newPassword and confirmPassword should be the same"
            });
        }

        userExists[0].userPassword = bcrypt.hashSync(newPassword, 10);
        userExists[0].isOtpVerified = false;
        await userExists[0].save();

        return res.status(200).json({
            message: "Password reset successful"
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while resetting the password"
        });
    }
};

