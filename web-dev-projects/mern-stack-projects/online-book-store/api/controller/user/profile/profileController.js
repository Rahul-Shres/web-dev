const User = require("../../../model/userModel")
const bcrypt = require("bcryptjs")



// get my profile controller 
exports.getMyProfile = async(req,res)=>{
    const userId = req.user._id 
    console.log(userId, "userId")
    const myProfile = await User.findById(userId)
    console.log(userId, "user id")
    // send response
    res.status(200).json({
        data : myProfile,
        message : "Profile fetched successfully"
    })
}