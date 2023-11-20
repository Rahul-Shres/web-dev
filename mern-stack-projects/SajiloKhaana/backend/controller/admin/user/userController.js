const User = require('../../../model/userModel');
// o index ma jaile ni admin hunxa
exports.getUsers = async(req,res) => {
    const users = await User.find().select(["+otp","isOtpVerified", "-__v"])
    if(users.length > 1) {
        return res.status(200).json({
            message: "Users fetched successfully",
            data : users
            
        })
        console.log(users)
    }else{
        return res.status(404).json({
            message: "Users not found",
            data: []
        });
    }
}