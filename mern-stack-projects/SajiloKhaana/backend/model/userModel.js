const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Corrected the Schema declaration

const userSchema = new Schema({
    userEmail: {
        type: String,
        required: [true, "Please enter a valid email address"],
        unique: true,
    },
    userPhoneNumber: {
        type: Number,
        required: [true, "Please enter a valid phone number"]
    },
    userPassword: {
        type: String,
        required: [true, "Please enter a valid password"]
    },
    role: {
        type: String, // Corrected the 'trye' typo
        enum: ["customer", "admin"],
        default: "customer"
    },
    otp:{
        type: Number
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
