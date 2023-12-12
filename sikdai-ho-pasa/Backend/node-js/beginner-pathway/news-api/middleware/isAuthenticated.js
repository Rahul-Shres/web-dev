const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');
const { users } = require('../model');
dotenv.config();

exports.isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  
  // Check if token is given or not
  if (!token) {
    return res.send('You must be logged in');
  }
  
  try {
    // Verify token if it is legitimate
    const verifyAsync = promisify(jwt.verify);
    const decryptedResult = await verifyAsync(token, process.env.SECRETKEY);
    console.log(decryptedResult);
    
    // Check if user exists or not
    const userExist = await users.findAll({
        where:{
            id: decryptedResult.id,
        }
    });

    if (userExist.length === 0) {
        return res.send('User not found');
    } else {
        // Assuming you want to set the found user in the request object
        req.user = userExist; // Set the user ID found in the request object
        req.userId = userExist[0].id
        next(); // Continue with the next middleware
    }
    
    
  } catch (error) {
    // Handle verification errors
    return res.status(401).send('Token verification failed');
  }
};
