const bcrypt = require('bcryptjs');
const { users } = require('../model');


exports.getRegister = async (req, res) => {
    res.render("register/register.ejs") 
  }

exports.register = async (req,res) =>{
    const body = req.body;
    console.log(body);
    const {username, email, password} = body;
    if(!username || !email || !password){
        return res.send("Username, email and password is required")
    }
    const him = await users.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password,8)
    })
 console.log(him);

 res.send("User created successfully");

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
        res.send("user logged in successfully")
       } else{
        res.send("user logged in failed")
       }
    }else{

    }
}