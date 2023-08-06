// Import required modules and packages
import express from 'express';      // Import Express framework for creating server
import dotenv from 'dotenv';        // Import dotenv to read environment variables from .env file
import cors from 'cors';            // Import cors for enabling Cross-Origin Resource Sharing
import bodyParser from 'body-parser';  // Import bodyParser to parse incoming request bodies
import Connection from './database/db.js';  // Import the database connection function
import Routes from './routes/route.js';      // Import the application routes

// Create an instance of the Express application
const app = express();

// Set up middleware to parse request bodies as JSON and handle URL-encoded data
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing (CORS) for handling requests from different origins
app.use(cors());

// Read environment variables from .env file if present
dotenv.config();

// Use the application routes defined in './routes/route.js'
// The routes will handle different API endpoints and their corresponding logic
app.use('/', Routes);

// Define the port number on which the server will listen for incoming requests
const PORT = 8000;

// Get the MongoDB connection URL from the environment variables
const DATABASE_URL = process.env.MONGODB_URL;

// Establish a connection to the MongoDB database using the connection function
Connection(DATABASE_URL)
  .then(() => {
    // If the connection is successful, start the server and listen on the defined port
    app.listen(PORT, () => console.log('Server listening on port ' + PORT));
  })
  .catch((error) => {
    // If an error occurs while connecting to the MongoDB database, log the error
    console.log('Error connecting to MongoDB:', error);
  });
