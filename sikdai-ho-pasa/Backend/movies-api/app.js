// Importing the express module, which helps create web applications
const express = require("express");

// Importing and configuring dotenv, a tool that loads environment variables from a file called .env
const dotenv = require("dotenv").config();

// Creating an instance of the express application, which represents our web server
const app = express();

app.use(express.json());

// Importing the mongoose module, which allows us to interact with a MongoDB database
const mongoose = require("mongoose");

// Importing the indexHandler module, which contains the code for handling the root URL ("/") request
const indexHandler = require("./handlers/indexHandler");
const getMovies = require("./handlers/getMovies");
const createMovies = require("./handlers/createMovies");
const editMovies = require("./handlers/editMovies");
const deleteMovies = require("./handlers/deleteMovies");

// Fetching the value of the environment variable mongo_connect, which stores the connection URL for MongoDB
const mongo_connect = process.env.mongo_connect;

// Connecting to MongoDB using the mongo_connect URL
mongoose
  .connect(mongo_connect, {})
  .then(() => {
    // Logging a success message when the connection is established
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    // Logging an error message if the connection fails
    console.log("Failed to connect to MongoDB");
  });

// Logging the value of the environment variable mongo_connect
console.log(process.env.mongo_connect);

// Configuring the route for the root URL ("/") to use the indexHandler module
app.get("/", indexHandler);

// CURD Operations

// Create
app.post("/movies", createMovies);

// Update
app.patch("/movies", editMovies);

// Read
app.get("/movies", getMovies);

// Delete
app.delete("/movies", deleteMovies);

// Starting the server on port 8000, which allows it to listen for incoming requests
app.listen(8000, () => {
  // Logging a message when the server starts listening
  console.log("Server is running");
});
