const bcrypt = require('bcryptjs');
const { users } = require('../model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const sendEmail = require('../services/sendEmail');

exports.getRegister = async (req, res) => {
    res.render("register/register.ejs") 
  }

exports.register = async (req,res) =>{
    const body = req.body;
    console.log(body);
    const {username, email, password, confirmpassword} = body;
    if(!username || !email || !password || !confirmpassword){
        return res.send("Username, email and password is required")
    }

    if(password.toLowerCase() !== confirmpassword.toLowerCase()){
        return res.send("Password and confirm password must be same")
    }


    const newUser = await users.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password,8)
    })
 console.log(newUser);
 req.flash("success","Logged In Successfully")
 res.redirect("/login");

}

exports.getLogin = async (req, res) => {
    const error =  req.flash("error")
    res.render("login/login.ejs",{error })
}

exports.login = async (req, res) => {
    const body = req.body;
    console.log(body);
    const {email, password} = body;

    const userExists = await users.findAll({
        where:{
            email: email,
        }
    })
    if(userExists.length > 0){ 
       // password check garne aaba
       const isMatched = bcrypt.compareSync(password, userExists[0].password) 
       if(isMatched){
        const token = jwt.sign({id: userExists[0].id}, process.env.SECRETKEY,{
            expiresIn: "30d"
        })
        console.log("token", token)
        res.cookie('token', token),{
            secure: true,
        }
        req.flash("success","Logged In Successfully")
        res.redirect("/")
       } else{
        req.flash("error","Invalid Password")
        res.redirect("/login")
       }
    }else{

    }
}


exports.getLogout = (req,res) => {
    res.clearCookie('token');
    res.redirect('/login');
  }



exports.getForgotPassword = async (req, res) => {
    res.render("forgotPassword/forgotPassword.ejs")
}

exports.checkForgotPassword = async (req, res) => {
    const email = req.body.email;
    // If email exists or not
    if (!email) {
        return res.send("Please provide an email");
    }

    try {
        const user = await users.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.send("User with that email does not exist");
        }

        const generateOtp = Math.floor(10000 + Math.random() * 90000);
        // Sending email notification
        await sendEmail({
            email: user.email,
            subject: "Password Reset OTP",
            otp: generateOtp
        });

        user.otp = generateOtp;
        user.otpGeneratedTime = new Date();
        await user.save();

        res.redirect("/otp?email=" + email);
    } catch (error) {
        console.error("Error occurred: ", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.renderOtpForm = (req, res) => {
    const email = req.query.email
    console.log(email);
    res.render("otpForm/otpForm.ejs", {email:email});
};

exports.handleOTP = async (req, res) => {
    const otp = req.body.otp;
    const email = req.params.id; 
    console.log("otp", otp, "email: ", email);

    if (!otp || !email) {
        return res.send("Please send email and OTP");
    }

    try {
        // Finding user data based on email and OTP
        const userData = await users.findOne({
            where: {
                email: email,
                otp: otp
            }
        });

        if (!userData) {
            return res.send("Invalid OTP or Email");
        }

        // Proceed with OTP validation logic here
        const currentTime = new Date();
        const otpGeneratedTime = userData.otpGeneratedTime;

        // Checking if OTP is valid within a 2-minute (120000 milliseconds) window
        if (currentTime - otpGeneratedTime <= 120000) {
            // userData.otp = null;
            // userData.otpGeneratedTime = null;
            // await userData.save();
            return res.redirect(`/passwordChangeForm?email=${email}&otp=${otp}`);
        } else {
            return res.send("OTP expired");
        }

    } catch (error) {
        console.error("Error occurred: ", error);
        res.status(500).send("Internal Server Error");
    }
};


exports.renderGetPasswordForm = (req,res) =>{
    const otp = req.query.otp;
    const email = req.query.email;
    console.log(otp,email, "from renderGetPAsswordForm")
    if(!email || !otp){
        return res.send("Email and OTP must be provided")
    }
    res.render("passwordChangeForm/passwordChangeForm.ejs",{otp,email})
}

exports.handlePasswordChange = async (req, res) => {
    const otp = req.params.otp;
    const email = req.params.email;
    console.log("from handlePasswordChange", otp, email)
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;

    if (!newPassword || !confirmPassword || !email || !otp) {
        return res.status(400).send("New Password and Confirm Password are required");
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).send("New password and Confirm password need to match");
    }

     // Finding user data based on email and OTP
     const userData = await users.findOne({
        where: {
            email: email,
            otp: otp
        }
    });


    if (userData.length === 0) {
        return res.send("Don't try to do this");
    }

    const otpGeneratedTime = userData.otpGeneratedTime;
    const currentTime = Date.now();

    // Check if the time limit for password change (2 minutes) has exceeded
    const timeElapsed = currentTime - otpGeneratedTime;
    const timeLimit = 1 * 60 * 1000; // 2 minutes in milliseconds

    if (timeElapsed >= timeLimit) {
        return res.redirect("/forgotPassword");
    }

    try {
        const hashedNewPassword = bcrypt.hashSync(newPassword, 8);

        await users.update(
            {
                password: hashedNewPassword
            },
            {
                where: {
                    email: email
                }
            }
        );

        res.redirect('/login');
    } catch (error) {
        console.error("Error occurred: ", error);
        res.status(500).send("Internal Server Error");
    }
};
