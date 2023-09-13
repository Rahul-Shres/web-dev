const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
// express.json accepts JSON files from Postman
app.use(express.json());

const authRoute = require('./routes/auth');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB database connection established successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use('/api/auth', authRoute);

app.listen("3000", () => {
    console.log("Server running on port 3000");
});