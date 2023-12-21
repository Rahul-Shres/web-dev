const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('./database/database');
dotenv.config();
const app = express();
const { registerUser, loginUser } = require('./controller/auth/authController');

// DATABASE CONNECTION
connectDatabase();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// telling nodejs to give access to uploads folder 
app.use(express.static("./uploads"))

// Routes here
const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const adminUsersRoute = require('./routes/adminUsersRoute');


app.get('/', (req, res) => {
    console.log("Welcome to my site!");
});

// register user api
app.use('/',authRoute)
app.use('/',productRoute);
app.use('/', adminUsersRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
