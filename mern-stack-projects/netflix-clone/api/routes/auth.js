const router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require("crypto-js");

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username or email already exists in the database and handle any errors.

    // Encrypt the password (you should use a secure hashing method instead)
    const encryptedPassword = CryptoJs.AES.encrypt(password, process.env.SECRET_KEY).toString();

    const newUser = new User({
        username: username,
        email: email,
        password: encryptedPassword,
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

module.exports = router;
