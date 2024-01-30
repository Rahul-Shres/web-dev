const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminEmail: {
        type: String,
        required: [true, 'Email must be provided'],
        unique: true,
        lowercase: true,
    },
    adminPhoneNumber: {
        type: Number,
        required: [true, "PhoneNumber must be provided"],
    },
    adminName: {
        type: String,
        required: [true, "UserName must be provided"],
    },
    adminPassword: {
        type: String,
        required: [true, "Password must be provided"],
    },
    role: {
        type: String,
        default: "admin",
    },
    otp: {
        type: Number,
        select: false,
    },
    isOtpVerified: {
        type: Boolean,
        default: false,
        select: false,
    },
    profileImage: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s",
    },
    department: {
        type: String,
        required: [true, "Department must be provided"],
    },
}, {
    timestamps: true,
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
