const express = require('express');
const { connectDatabase,} = require('./database/database'); // Import the User model from your database module
const dotenv = require('dotenv');
const User = require('./model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config();
const authRoute = require('./routes/authRoutes');
const productRoute = require('./routes/productRoute');
// Database connection
connectDatabase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded() with options

app.get('/', async (req, res) => {
  res.status(200).send('Hello, World!');
});



// Register user API
app.use('/api', authRoute)
app.use('/api', productRoute)


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});