const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const { users } = require('../model');

exports.isAuthenticated = async (req,res,next) =>{
    const token = req.cookies.token;
    //check if token given or not
    if(!token){
        return res.redirect('/login');
    }

    // verify token if it is legit or not

    const decryptedResult = await promisify(jwt.verify)(token,process.env.SECRETKEY);
    console.log(decryptedResult);

    const ifUserExists = await users.findAll({
        where:{
            id: decryptedResult.id
        }
    })

    if(ifUserExists.length == 0){
        res.send("User does not exist")
    }else{
        req.user= ifUserExists;
    }
    next();
}