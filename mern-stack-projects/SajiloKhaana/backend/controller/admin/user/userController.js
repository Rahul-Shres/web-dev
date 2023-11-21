const User = require('../../../model/userModel');
// o index ma jaile ni admin hunxa
exports.getUsers = async(req,res) => {
    const userId = req.user.id; // Assuming user ID is retrieved from the request

    // const users = await User.find().select(["+otp","isOtpVerified"])
    const users = await User.find({_id: {$ne: userId}})
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


exports.deleteUser = async (req,res) => {
    const userId = req.user.id; // Assuming user ID is retrieved from the request
    if(!userId){
        return res.status(404).json({
            message: "Plrease provide id",
        })
    }

    const user= await User.findById(userId)
    if(!user){
        return res.status(404).json({ 
            message: "User not found",
        })
    } else {
        await User.findByIdAndDelete(userId)
        res.status(200).json({
            message: "User deleted",
        })
    }
}

exports.addProductReview = async(req,res) => {
    const productId = req.params.id
    const {rating,message} = req.body
    const userId = req.user.id
    const review = {
        userId,
        rating,
        message,

    }
    const product = await Product.findById(productId)
    product.reviews.push(review)
    await product.save()
    res.json({
        message: "Review done"
    })
}