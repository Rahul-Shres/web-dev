const User = require('../../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../services/sendMail');

exports.registerUser = async (req, res) => {
    console.log(req.body);
    const { email, password, phoneNumber } = req.body; // Destructure the request body
    if (!email || !password || !phoneNumber) {
        return res.status(400).json({
            message: "Please provide email, password, and phone number"
        });
    } 

    const userFound = await User.find({userEmail: email})
    if (userFound.length > 0) {
        return res.status(400).json({ 
            message: "User that email already exists"
        })
    }
    try {
        // Create a new user with the provided information
        const newUser = await User.create({
            userName: 'SomeUserName', // You need to specify a username or retrieve it from the request
            userPhoneNumber: phoneNumber,
            userEmail: email,
            userPassword: bcrypt.hashSync(password,10)
        });

        res.status(201).json({
            message: 'User created successfully',
            user: newUser // You can also send the created user in the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating the user'
        });
    }
}


exports.loginUser =  async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter your email address and password"
      });
    }
  
    try {
      const userFound = await User.findOne({ userEmail: email });
  
      if (!userFound) {
        return res.status(400).json({
          message: "User with that email is not registered"
        });
      }
  
      if (!userFound.userPassword) {
        return res.status(500).json({
          message: "User password is not set"
        });
      }
  
      const isMatched = bcrypt.compareSync(password, userFound.userPassword);
  
      if (isMatched) {
        // generate token
        const token = jwt.sign({ id: userFound._id }, "this is secret key", { expiresIn: "30d" });
  
        res.status(200).json({
          message: "User logged in successfully",
          token: token,
        });
      } else {
        res.status(401).json({
          message: "Invalid password"
        });
      }
    } catch (error) {
      console.error("Error in login route:", error);
      res.status(500).json({
        message: "Internal server error"
      });
    }
  }


  exports.forgotPassword = async (req, res) => {

    const {email} = req.body;
    if(!email){
        return res.status(400).json({ message: "Please enter your valid email"});
    }

    // check if the user is registerd or not
    const userExist = await User.find({ userEmail: email})
    if(userExist.length == 0){
        return res.status(404).json({
            message: "Email is not registered"
        })
    }

    // send otp to that email
    const otp = Math.floor( 1000 + Math.random()*9000)
    await sendEmail({
        email: "shrestharahul388@gmail.com",
        subject: "Hello World",
        message: "Hello World",
    })
    res.json({
        message: "Email sent"
    })
  }

