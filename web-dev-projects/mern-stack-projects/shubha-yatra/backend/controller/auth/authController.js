const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/userModel');
const sendEmail = require('../../services/sendEmail');

exports.registerUser = async (req, res) => {
    const { email, username, password, phoneNumber } = req.body;

    console.log(email, username, password, phoneNumber);

    if (!email || !username || !password || !phoneNumber) {
        return res.status(400).send("Please enter a valid email, username, password, and phoneNumber");
    }

    try {
        // Check if user with that email already exists
        const userFound = await User.find({ userEmail: email });

        if (userFound.length > 0) {
            return res.status(400).json({ message: "User with that email already exists" });
        }

        // Create a new user instance using the User model
        const newUser = new User({
            userEmail: email,
            userName: username,
            // Hashing password
            userPassword: bcrypt.hashSync(password, 10),
            userPhoneNumber: phoneNumber
            // You might want to add validation or checks before saving to the database
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        console.log('User registered:', savedUser);
        res.status(200).json({ message: 'User registered successfully', user: savedUser });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Could not register user' });
    }
}
 

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please enter both email and password");
    }

    try {
        const user = await User.find({ userEmail: email });

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const hashedPasswordFromDB = user[0].userPassword;
        console.log("Hashed Password from DB:", hashedPasswordFromDB);

        const passwordMatch = await bcrypt.compareSync(password, hashedPasswordFromDB);

        console.log("Password Match Result:", passwordMatch);

        const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "User logged in successfully",
            data: user,
            token: token
        });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(400).json({ error: 'Login failed' });
    }
}



// exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).send("Please enter both email and password");
//     }

//     try {
//         const user = await User.find({ userEmail: email });

//         if (user.length === 0) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const hashedPasswordFromDB = user[0].userPassword;
//         console.log("Hashed Password from DB:", hashedPasswordFromDB);

//         const passwordMatch = await bcrypt.compareSync(password, hashedPasswordFromDB);

//         console.log("Password Match Result:", passwordMatch);
//         // generate token
//          // Generate a JWT token upon successful login
//         //  const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '100h' });
//          const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
         
//         if (!passwordMatch) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//          // Return the token as part of the login response
//          // Return the token as part of the login response and log it before sending
// res.status(200).json({
//     message: "User logged in successfully",
//     data: user,
//     token: token
// }, () => {
//     // Log the generated token to the console
//     console.log("Generated Token:", token);
// });
//     } catch (err) {
//         console.error('Error during login:', err);
//         res.status(400).json({ error: 'Login failed' });
//     }
// }

// forgot password
exports.forgotPassword = async (req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({
            message : "Please provide email "
        })
    }

    // check if that email is registered or not
    const userExist = await User.find({userEmail : email})
    if(userExist.length == 0){
        return res.status(404).json({
            message : "Email is not registered"
        })
    }

    // send otp to that email
    const otp = Math.floor(1000 + Math.random() * 9000);
    userExist[0].otp = otp 
    await userExist[0].save()
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


// verify otp 
exports.verifyOtp = async(req,res)=>{
    const {email,otp} = req.body
    if(!email || !otp){
        return res.status(400).json({
            message : "Please provide email,otp"
        })
    }
    // check if that otp is correct or not of that email
   const userExists = await User.find({userEmail : email})
   console.log(userExists)
   if(userExists.length == 0){
    return res.status(404).json({
        message : "Email is not registered"
    })
   }
   console.log(userExists[0].otp, otp)
   if(userExists[0].otp !== otp){

    res.status(400).json({
        message : "Invalid otp"
    })
   }else{
    // dispost the otp so cannot be used next time the same otp
    userExists[0].otp = undefined
    userExists[0].isOtpVerified = true
    await userExists[0].save()
    res.status(200).json({
        message : "Otp is correct"
    })
   }


}

exports.resetPassword = async (req,res)=>{
    const {email,newPassword,confirmPassword} = req.body
    if(!email || !newPassword || !confirmPassword){
        return res.status(400).json({
            message : "Please provide email,newPassword,confirmPassword"
        })
    }
    if(newPassword !== confirmPassword){
        return res.status(400).json({
            message : "newPassword and confirmPassword doesn't match"
        })
    }

    const userExists = await User.find({userEmail:email})
    if(userExists.length == 0){
        return res.status(404).json({
            message : "User email not registered"
        })
    }
    if(userExists[0].isOtpVerified !== true){
        return res.status(403).json({
            message : "You cannot perform this action"
        })
    }

    userExists[0].userPassword = bcrypt.hashSync(newPassword,10)
    userExists[0].isOtpVerified = false;
    await userExists[0].save()

    res.status(200).json({
        message : "Password changed successfully"
    })
}