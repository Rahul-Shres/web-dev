const mongoose = require('mongoose');
const User = require('../model/userModel');
const dotenv = require('dotenv').config();
const  adminSeeder = require('../adminSeeder')


exports.connectDatabase = async()=>{
   // MongoDB connection
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI);

const connection = mongoose.connection;
connection.once('open', async () => {
  console.log('MongoDB database connection established successfully');

  const isAdminExists =await User.findOne({ userEmail: "ppxn@example.com"})
  adminSeeder()
  
});
}


