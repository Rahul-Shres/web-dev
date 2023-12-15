const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');
dotenv.config();


exports.decodedToken = async(token,secret) =>{
    const decryptedResult = await promisify(jwt.verify)(token, secret)
    return decryptedResult;
}