const bcrypt = require('bcryptjs');
const { users } = require('../model');


exports.getRegister = async (req, res) => {
    res.render("register/register.ejs") 
  }

exports.register = async (req,res) =>{
    const body = req.body;
    console.log(body);
    // const {username, email, password} = body;
    // if(!username || !email || !password){
    //     return res.send("Username, email and password is required")
    // }
    // await users.create({
    //     username: username,
    //     email: email,
    //     password: bscypt.hashsync(password,8)
    // })
 res.send("User created successfully");

}

