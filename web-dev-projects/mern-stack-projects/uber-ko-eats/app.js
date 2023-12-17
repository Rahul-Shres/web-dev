const express = require('express');
const dotenv = require('dotenv');
const { Connection } = require('mongoose');
const { connectDatabase } = require('./database/database');
dotenv.config();
const app = express();

// DATABASE CONNECTION
connectDatabase();

// node js user ko req or input handle gar hai
114

app.get('/', (req,res)=>{
    console.log("Welcome to my site!");
})

app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
});