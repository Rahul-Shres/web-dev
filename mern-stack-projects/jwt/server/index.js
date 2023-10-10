const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/AuthRoutes');
const port = 4000;

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const cookieParser = require('cookie-parser');
app.use( 
    cors({
        origin: "http://localhost:4000",
        methods: ["GET", "POST"],
        credentials: true,
    })
);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to database");
});

app.use(express.json());
app.use(cookieParser());
app.use('/', authRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
