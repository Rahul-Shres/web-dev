 // Method one
    // if (!token) {
    //     return res.status(403).json({ message: "Please send a token" });
    // }

    // jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    //     if (err) {
    //         return res.status(400).json({ message: "Invalid token" });
    //     } else {
    //         // If the token is valid, you can even attach the decoded data to the request object for later use if needed.
    //         req.decoded = decoded;
    //         return res.status(200).json({ message: "Token is valid" });
    //     }
    // });

    //Alternative


    const jwt = require('jsonwebtoken');
    const { promisify } = require('util');
    const User = require('../model/userModel');
    
    const isAuthenticated = async (req, res, next) => {
        const token = req.headers.authorization;
    
        if (!token) {
            return res.status(403).json({ message: "Please send a token" });
        }
    
        try {
            const decoded = await promisify(jwt.verify)(token, "this is a secret key");
            const user = await User.findOne({ _id: decoded.id });
    
            if (!user) {
                return res.status(404).json({ message: "User does not exist with that token id" });
            }
    
            // Attach the user object to the request for later use if needed.
            req.user = user;
    
            next();
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    
    module.exports = isAuthenticated;
    