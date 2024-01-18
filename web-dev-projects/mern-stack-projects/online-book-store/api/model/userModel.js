const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  currentOrgNumber: {
    type: Number,
    required: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  displayName: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
