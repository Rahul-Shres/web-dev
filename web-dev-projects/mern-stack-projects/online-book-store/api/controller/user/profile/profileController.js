const User = require("../../../model/userModel")
const bcrypt = require("bcryptjs")
const { decodeToken } = require("../../../services/decodeToken")



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


// controller to associate counselor name and user phone number with the user
exports.associateCounselorAndPhoneNumber = async (req, res) => {
    try {
        const userId = req.user._id;

        
        const token = req.headers.authorization;
        console.log("token", token)
        if (!token) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        const dedodedToken = await decodeToken(token,process.env.JWT_SECRET);
        console.log(dedodedToken, "decoded token")

      const { counselorName, phoneNumber } = req.body;
  
     console.log(counselorName, "counselorName", phoneNumber, "phoneNumber")
    // Check if userId is not a string (possibly an ObjectId)
    if (typeof userId !== 'string') {
        req.user._id = userId.toString(); // Convert ObjectId to string
      }
      // Update user profile with counselor name and phone number
      const updatedProfile = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            counselor: counselorName,
            phoneNumber: phoneNumber,
          },
        },
        { new: true }
      );
  
      res.status(200).json({
        data: updatedProfile,
        message: "Counselor and phone number associated successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };