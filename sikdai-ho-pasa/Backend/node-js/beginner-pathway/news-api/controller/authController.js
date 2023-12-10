const bcrypt = require('bcryptjs');
const { users } = require('../model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


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

 res.redirect("/login");

}

exports.getLogin = async (req, res) => {
    res.render("login/login.ejs")
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
        res.redirect("/")
       } else{
        res.send("user logged in failed")
       }
    }else{

    }
}