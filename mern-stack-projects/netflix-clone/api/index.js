const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

mongoose.connect( process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


app.listen("3000", () => {
    console.log("Server running on port 3000");
})