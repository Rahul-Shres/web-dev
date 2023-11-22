const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userEmail: {
        type: String,
        required: [true, 'User email must be provided'],
        unique: true // Consider adding unique constraint if emails should be unique
    },
    userPhoneNumber: {
        type: String, // Storing phone numbers as strings
        required: [true, "Phone number must be provided"]
    },
    userName: {
        type: String,
        required: [true, "Username must be provided"]
    },
    userPassword: {
        type: String,
        required: [true, "Password must be provided"],
        minlength: 8,
        // Consider using bcrypt to hash passwords before saving them
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer",
    },
    otp: {
        type: Number,
        select: false // Hiding the OTP field by default
    },
    isOtpVerified: {
        type: Boolean,
        default: false,
        select: false // Hiding the OTP verification status by default
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
