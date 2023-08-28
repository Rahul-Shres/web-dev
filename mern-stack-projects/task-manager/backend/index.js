const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://shrestharahul388:admin123@cluster0.toukes5.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


app.get("/", (req,res) =>{
    res.send("Hello World")
})


app.listen('5000', () => {
    console.log("Server listening");
})