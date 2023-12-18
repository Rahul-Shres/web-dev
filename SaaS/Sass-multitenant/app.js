// REQUIRES START HERE
const express = require('express');
const app = express();
require('dotenv').config();
// REQUIRES ENDS HERE

// DATABASE CONNECTION
require('./model/index')
app.get('/', (req, res) => {
    res.send("I am live")
})
app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
})