const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();
// Cors is used to connect the server to the client
app.use(cors());
// Express.json to pass the data between client and server
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/curd")

app.post('/createUser', (req,res) =>{
    UserModel.create(req.body).then(users => res.json(users)).catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log('Server is Running');
})