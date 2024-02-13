// userModel.js
const mongoose = require('mongoose');

const userVerificationSchema = new mongoose.Schema({
    counselorName: { 
    type: String, 
    required: true },
  
    userNumber: {
    type: Number,
    required: false,
  },
  
}, { timestamps: true });

const UserVerification = mongoose.model('User', userVerificationSchema);

module.exports = UserVerification;
