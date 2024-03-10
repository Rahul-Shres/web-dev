const express = require("express");
const app = express();
const { connectDatabase } = require("./db/db");
// Telling node to use .env files
require("dotenv").config();

// Connect to database
connectDatabase(process.env.MONGO_URI);

app.use('/', (req,res)=>{
    res.status(200).json({
        message : "Running Live"
    })
})

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`listening on port number ${PORT}`)
})

// continue from 1:00:00