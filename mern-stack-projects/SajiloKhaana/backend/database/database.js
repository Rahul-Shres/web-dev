const mongoose = require('mongoose')
const dotenv = require('dotenv').config();



exports.connectDatabase = async()=>{
   // MongoDB connection
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
}