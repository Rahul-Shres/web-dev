
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendEmail = require("../../../services/sendEmail")
const Admin = require("../../../model/adminModel")
const generateToken = require("../../../services/generateToken")

exports.registerAdmin = async (req, res) => {
    const file = req.file;
    console.log(file, "file");
    let filePath;
    if (!file) {
      filePath =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s";
    } else {
      filePath = req.file.filename;
    }
    console.log(filePath, "file path");
  
    const { email, password, phoneNumber, adminName, department } = req.body;
    console.log(email, "email", password,"password", phoneNumber, "phone number",adminName, "adminName",department, "department");
    if (!email || !password || !phoneNumber || !adminName || !department) {
      return res.status(400).json({
        message: "Please provide email, password, phoneNumber, and department",
      });
    }
   
    
      // Check if the admin with that email already exists
      const adminFound = await Admin.findOne({ adminEmail: email });
      if (adminFound) {
        return res.status(400).json({
          message: "Admin with that email already registered",
          data: [],
        });
      }
  
      // Create a new admin
      const adminData = await Admin.create({
        adminName: adminName,
        adminPhoneNumber: phoneNumber,
        adminEmail: email,
        adminPassword: bcrypt.hashSync(password, 10),
        profileImage: process.env.BACKEND_URL + filePath,
        department: department,
      });

      console.log(adminData, "admin created");
  
      res.status(200).json({
        message: "Admin Created Successfully",
        data: adminData,
      });
    
  };

exports.loginAdmin = async(req,res)=>{
    const {email,password} = req.body
    console.log(email,"email", password, "password")
    if(!email || !password){
        return res.status(400).json({
            message : "Please provide email,password"
        })
    }

    // check if that email user exists or not
    const adminFound = await Admin.find({adminEmail : email})
    if(adminFound.length == 0){
        return res.status(404).json({
            message : "Admin with that email is not Registered"
        })
    }

 
    // password check 
    const isMatched = bcrypt.compareSync(password,adminFound[0].adminPassword)
    if(isMatched){
        // generate token using the generateToken function
        const token = generateToken(adminFound[0]);
        console.log(token, "token")

        res.status(200).json({
            message : "Admin logged in successfully",
           data :  adminFound,
           token : token
        })
    }else{
        res.status(400).json({
            message : "Invalid Password"
        })
    }
    
}


// forgot password
exports.forgotPassword = async (req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({
            message : "Please provide email "
        })
    }

    // check if that email is registered or not
    const adminExist = await Admin.find({adminEmail : email})
    if(adminExist.length == 0){
        return res.status(404).json({
            message : "Email is not registered"
        })
    }

    // send otp to that email
    const otp = Math.floor(1000 + Math.random() * 9000);
    adminExist[0].otp = otp 
    await adminExist[0].save()
   await sendEmail({
        email :email,
        subject : "Your Otp for digitalMOMO forgotPassword",
        message : `Your otp is ${otp} . Dont share with anyone`
    })
    res.status(200).json({
        message : "OTP sent successfully",
        data : email
    })
  
}


// // verify otp 
// exports.verifyOtp = async(req,res)=>{
//     const {email,otp} = req.body
//     if(!email || !otp){
//         return res.status(400).json({
//             message : "Please provide email,otp"
//         })
//     }
//     // check if that otp is correct or not of that email
//     const adminExist = await Admin.find({adminEmail : email})
//    console.log(adminExist)
//    if(adminExist.length == 0){
//     return res.status(404).json({
//         message : "Email is not registered"
//     })
//    }
//    console.log(adminExist[0].otp, otp)
//    if(adminExist[0].otp !== otp){

//     res.status(400).json({
//         message : "Invalid otp"
//     })
//    }else{
//     // dispost the otp so cannot be used next time the same otp
//     adminExist[0].otp = undefined
//     adminExist[0].isOtpVerified = true
//     await adminExist[0].save()
//     res.status(200).json({
//         message : "Otp is correct"
//     })
//    }


// }


// // verify otp 
// exports.verifyOtp = async (req, res) => {
//     const { email, otp } = req.body;
//     if (!email || !otp) {
//         return res.status(400).json({
//             message: "Please provide email and otp"
//         });
//     }

//     // check if that otp is correct or not for that email
//     const adminExists = await Admin.findOne({ adminEmail: email }).select('+otp +isOtpVerified');
//     console.log(adminExists);

//     if (!adminExists) {
//         return res.status(404).json({
//             message: "Email is not registered"
//         });
//     }

//     console.log(adminExists.otp, otp);

//     if (adminExists.otp !== otp) {
//         return res.status(400).json({
//             message: "Invalid otp"
//         });
//     } else {
//         // dispose of the otp so it cannot be used next time with the same otp
//         adminExists.otp = undefined;
//         adminExists.isOtpVerified = true;
//         await adminExists.save();

//         res.status(200).json({
//             message: "Otp is correct"
//         });
//     }
// };

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(400).json({
            message: "Please provide email and otp"
        });
    }

    try {
        // check if that otp is correct or not for that email
        const adminExists = await Admin.findOne({ adminEmail: email }).select('+otp +isOtpVerified');
        console.log(adminExists);

        if (!adminExists) {
            return res.status(404).json({
                message: "Email is not registered"
            });
        }

        console.log(adminExists.otp, otp);

        if (adminExists.otp !== otp) {
            return res.status(400).json({
                message: "Invalid otp"
            });
        } else {
            // dispose of the otp so it cannot be used next time with the same otp
            adminExists.otp = undefined;
            adminExists.isOtpVerified = true;
            await adminExists.save();

            res.status(200).json({
                message: "Otp is correct"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};



// reset password
exports.resetPassword = async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body;

    try {
        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).json({
                message: "Please provide email, newPassword, and confirmPassword"
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                message: "newPassword and confirmPassword don't match"
            });
        }

        const adminExists = await Admin.findOne({ adminEmail: email });

        if (!adminExists) {
            return res.status(404).json({
                message: "User email not registered"
            });
        }
        console.log("isOtpVerified:", adminExists.isOtpVerified);

        if (adminExists.isOtpVerified === false) {
            return res.status(403).json({
                message: "You cannot perform this action"
            });
        }

        adminExists.adminPassword = bcrypt.hashSync(newPassword, 10);
        adminExists.isOtpVerified = false;
        await adminExists.save();

        return res.status(200).json({
            message: "Password changed successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
