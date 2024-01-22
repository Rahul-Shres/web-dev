const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema  =  new Schema({
    adminEmail : {
        type : String,
        required : [true,'userEmail must be provided'],
        unique : true,
        lowercase : true
  
    },
    adminPhoneNumber : {
        type : Number,
        required : [true,"PhoneNumber must be provided"]
    },
    adminName : {
        type : String,
        required  : [true,"UserName must be provided"]
    },
    adminPassword : {
        type : String,
        required : [true,"Password must be provided"],
        minlength : 8,
        // select : false
    },
    role : {
        type : String,
        default : "admin",
    },
    otp : {
        type : Number,
        select : false
    },
    isOtpVerified : {
        type : Boolean,
        default : false,
        select : false
    },
},{
    timestamps : true
})

const Admin = mongoose.model("Admin",adminSchema)
module.exports = Admin