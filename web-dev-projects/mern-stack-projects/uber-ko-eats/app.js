const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('./database/database');
const User = require('./model/userModel'); // Update the path if necessary
dotenv.config();
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// DATABASE CONNECTION
connectDatabase();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("Welcome to my site!");
});

// register user api
app.post('/register', async (req, res) => {
    const { email, username, password, phoneNumber } = req.body;

    console.log(email, username, password, phoneNumber);

    if (!email || !username || !password || !phoneNumber) {
        return res.status(400).send("Please enter a valid email, username, password, and phoneNumber");
    }

    try {
        // Check if user with that email already exists
        const userFound = await User.find({ userEmail: email });

        if (userFound.length > 0) {
            return res.status(400).json({ message: "User with that email already exists" });
        }

        // Create a new user instance using the User model
        const newUser = new User({
            userEmail: email,
            userName: username,
            // Hashing password
            userPassword: bcrypt.hashSync(password, 10),
            userPhoneNumber: phoneNumber
            // You might want to add validation or checks before saving to the database
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        console.log('User registered:', savedUser);
        res.status(200).json({ message: 'User registered successfully', user: savedUser });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Could not register user' });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please enter both email and password");
    }

    try {
        const user = await User.find({ userEmail: email });

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const hashedPasswordFromDB = user[0].userPassword;
        console.log("Hashed Password from DB:", hashedPasswordFromDB);

        const passwordMatch = await bcrypt.compareSync(password, hashedPasswordFromDB);

        console.log("Password Match Result:", passwordMatch);
        // generate token
         // Generate a JWT token upon successful login
        //  const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '100h' });
         const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

         // Return the token as part of the login response
         res.status(200).json({ message: "Login successful", token: token, user });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Login failed' });
    }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
