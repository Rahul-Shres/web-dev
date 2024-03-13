const express = require("express");
const app = express();
const cors = require("cors")
const { connectDatabase } = require("./db/db");
// Telling node to use .env files
require("dotenv").config();

// cors
app.use(cors({
    origin: "http://localhost:3000"
}))
//  node js lai form bata aako data parse gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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

// continue from 1:00:00 - day 6
