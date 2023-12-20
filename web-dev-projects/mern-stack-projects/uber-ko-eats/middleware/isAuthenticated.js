
const jwt = require("jsonwebtoken")
const {promisify} = require("util")
const User = require("../model/userModel")

exports.isAuthenticated = async (req,res, next) =>{
    console.log("From Middleware : isauthenticated-------------------------------------------------------------------------------------------------")
    const token = req.headers.authorization
    if(!token){
        res.status(403).json({
            message : "Please login"
        })
    }
    console.log("From Middleware :", token, "----------------------------------------------------------------------")
    try {
        const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET)
        const doesUserExist =  await User.findOne({_id : decoded.id})
    
       if(!doesUserExist){
        return res.status(404).json({
            message : "From isAuthenticated Middleware : User doesn't exists with that token/id"
        })
       }
       req.user  = doesUserExist
    
       next()
      } catch (error) {
        res.status(400).json({
            message : error.message
        })
      }
   
}