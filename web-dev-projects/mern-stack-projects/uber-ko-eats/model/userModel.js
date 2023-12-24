const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userEmail : {
        type: String,
        required:[true,'userEmail must be a valid email'],
        unique: true
    },
    userName:{
        type: String,
        required:[true,'username must be a valid email']
    },
    userPhoneNumber : {
        type : Number,
        required:[true,'userPhoneNumber must be a valid']
    },
    userPassword : {
        type: String,
        required:[true,'userPassword must be a valid']
    },
    role:{
        type: String,
        enum: ["customer", "admin"],
        default : "customer",
    },
    otp:{
        type: Number,
    },
    isOtpVerified : {
        type: Boolean,
        default: false
    },
    cart: [{type : Schema.Types.ObjectId, ref : "Product"}]
       
    

});

const User = mongoose.model('User', userSchema);
module.exports = User;