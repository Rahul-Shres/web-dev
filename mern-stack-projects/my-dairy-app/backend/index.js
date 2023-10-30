const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors middleware

//dotenv
dotenv.config();
const app = express();

// Use the built-in express.json() middleware to parse JSON requests
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Cors
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const blogRouter = require('./routes/blogRoute');
app.use('/blogers', blogRouter);

// Server
const port = process.env.PORT || 5000; // Make sure to provide a default port in case it's not set in your environment variables.
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
