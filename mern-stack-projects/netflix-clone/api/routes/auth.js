// Ninja Village (Express Server) Entrance
const router = require('express').Router();

// The Scrollkeeper (User Model)
const User = require('../models/User');

// Secret Scrolls (Environment Variables)
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// Registration Jutsu
router.post('/register', async (req, res) => {
    // New Ninja (User) Details
    const { username, email, password } = req.body;

    // Check if the username or email already exists in the ninja database and handle any errors.

    // Encryption Jutsu: Hide the Password Scroll (Encrypt the password)
    const encryptedPassword = CryptoJs.AES.encrypt(password, process.env.SECRET_KEY).toString();

    // Create a new Ninja (User) with their details
    const newUser = new User({
        username: username,
        email: email,
        password: encryptedPassword,
    });

    try {
        // Register the Ninja (Save to the database)
        const user = await newUser.save();
        res.status(201).json(user); // Successfully registered ninja
    } catch (err) {
        res.status(500).json({ error: 'Error registering ninja' }); // Error occurred during registration
    }
});

// Login Jutsu
router.post('/login', async (req, res) => {
    try {
        // Search for the Ninja (User) by their email
        const user = await User.findOne({ email: req.body.email });

        // If the Ninja is not found, respond with "Wrong password"
        !user && res.status(401).json("Wrong password");

        // Decryption Jutsu: Reveal the Password Scroll (Decrypt the password)
        const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

        // Check if the password matches
        originalPassword !== req.body.password &&
        res.status(401).json("Wrong password or username");

        // Create an Access Token (Ninja ID and Permissions)
        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        );

        // Remove the Password Scroll for security and respond with ninja information and their access token
        const { password, ...ninjaInfo } = user._doc;
        res.status(200).json({ ...ninjaInfo, accessToken });
    } catch (err) {
        res.status(500).json(err); // Error occurred during login
    }
});

// Ninja Scrolls (Export the router for use)
module.exports = router;
