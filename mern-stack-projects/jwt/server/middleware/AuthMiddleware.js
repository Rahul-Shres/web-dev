/*
  This code is a middleware function that checks if
  a user is authenticated using a JSON Web Token (JWT).
  It first checks if a JWT token exists in the cookies.
  If a token is found, it verifies the token using a secret
  key. If the token is valid, it looks up the user by the
  decoded user ID and responds with the user's email
  if found. If the token is not valid or the user
  is not found, it responds with status false. If no
  token is found in cookies, it also responds with status
  false.
*/




// Import necessary modules
const User = require('../Model/UserModel');
const jwt = require('jsonwebtoken');

// Middleware function to check if the user is authenticated
module.exports.checkUser = (req, res, next) => {
    // Check if a JWT token exists in the cookies
    const token = req.cookies.jwt;

    if (token) {
        // Verify the JWT token with a secret key
        jwt.verify(token, "Mero secret Chabi", async (err, decodedToken) => {
            if (err) {
                // If token verification fails, respond with status false
                res.json({ status: false });
                next(); // Move on to the next middleware or route handler
            } else {
                // If token is valid, find the user by the decoded user ID
                try {
                    const user = await User.findById(decodedToken.id);
                    
                    if (user) {
                        // If user is found, respond with status true and user email
                        res.json({ status: true, user: user.email });
                    } else {
                        // If user is not found, respond with status false
                        res.json({ status: false });
                    }
                    next(); // Move on to the next middleware or route handler
                } catch (error) {
                    // Handle any errors that occur during user lookup
                    console.error(error);
                    res.status(500).json({ status: false, message: "Internal Server Error" });
                }
            }
        });
    } else {
        // If no token is found in cookies, respond with status false
        res.json({ status: false });
        next(); // Move on to the next middleware or route handler
    }
};


