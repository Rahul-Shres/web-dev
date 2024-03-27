const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');

// Admin Registration
exports.createAdmin = async (req, res) => {
    try {
      const { email, username, password } = req.body;
      console.log(email, username, password)

      if(!email || !username || !password  ){
        return res.status(400).json({
             message : "Please provide email, password, and username"
         })
     }

      // check if that email user already exists or not
   const adminFound =  await Admin.find({ email})
   if(adminFound.length > 0 ){
       return res.status(400).json({
           message : "Admin with that email already registered",
           data : []
       })
   }
      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = await Admin.create({ 
        email, 
        username, 
        password: hashedPassword });


        res.status(201).json({
          message : "User registered successfully",
        
      })
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to register admin");
    }
  };

  
// Admin Login
exports.loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if(!email || !password){
        return res.status(400).json({
            message : "Please provide email, password"
        })
    }

     // check if that email user exists or not
     const adminFound = await Admin.find({email})
     if(adminFound.length == 0){
         return res.status(404).json({
             message : "Admin with that email is not registered"
         })
     }
      
     // password check 
    const isMatched = bcrypt.compareSync(password, adminFound[0].password)
      if (!isMatched) {
        return res.status(401).send("Invalid password");
      }
      res.status(200).json({
        message : "Admin logged in successfully",
       data :  adminFound,
       
    })
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to login");
    }
  };
