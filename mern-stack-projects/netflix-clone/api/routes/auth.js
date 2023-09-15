const router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
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

//LOGIN

router.post('/login', async (req, res) => {
try{
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password");
    const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJs.enc.Utf8);
    originalPassword !== req.body.password &&
    res.statusCode(401).json("Wrong password or username");
    const accessToken = jwt.sign(
        {id: user._id, isAdmin: user.isAdmin}, 
        process.env.SECRET_KEY,{expiresIn: "5d "}
    )
    const { password, ...bytesinfo } = user._doc;
    res.statusCode(200).json(...info,accessToken);
}catch(err){
    res.status(500).json(err);
}
 
})

module.exports = router;
