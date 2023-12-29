const User = require("./model/userModel");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config();

exports.adminSeeder = async()=>{
     // admin seeding

        // check if admin exists or nor
        const isAdminExists = await User.findOne({ userEmail: 'admin@gmail.com'})
        if(isAdminExists) {
            console.log('Admin user already exists : From adminSeeder.js');
            return;
        } else{
            await User.create({
                userEmail: 'admin@gmail.com',
                // remember to hash admin password
                //otherwise token will not be generated to login or do anythin in the app
                userPassword: bcrypt.hashSync("admin",10),
                userPhoneNumber: '123789456',
                userName : 'Admin',
                role: 'admin'
               
            })
    
            console.log('Admin user created : From adminSeeder.js');
        }
}