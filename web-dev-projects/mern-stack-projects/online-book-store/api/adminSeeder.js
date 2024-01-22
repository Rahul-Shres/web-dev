const bcrypt = require("bcryptjs")
const Admin = require("./model/adminModel")

const adminSeeder = async()=>{
     // admin seeding

 // check whether admin exists or not
 const isAdminExists = await Admin.findOne({adminEmail : "admin@gmail.com"})
 
 if(!isAdminExists){
    await Admin.create({
        adminEmail : "admin@gmail.com",
        adminPassword : bcrypt.hashSync("admin",10),
        adminPhoneNumber : "9810359789",
        adminName : "admin",
        role : "admin"
    
     })
    
     console.log("Admin seeded successfully")
 }else{
    console.log("Admin already seeded")
 }

}



module.exports = adminSeeder