const express = require('express');
const app = express();

app.use(express())
app.use(express.urlencoded({ extended: true }))

//require database
require('./model/index')

app.get('/',(req,res) => {
    console.log("I am a pro developer")
} )
app.listen(3000, ()=>{
    console.log('listening on port 3000')
})