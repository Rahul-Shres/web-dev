// Importing the express framework to create our web server
const express = require("express");

// Creating an instance of the express application
const app = express();

// Importing CORS middleware to handle Cross-Origin Resource Sharing
const cors = require("cors");

// Importing the Pizza model to interact with the database
const Pizza = require("./model/pizzaModel");

// Importing the function to connect to the MongoDB database
const { connectDatabase } = require("./db/db");

// Loading environment variables from .env file
require("dotenv").config();

// Allowing requests from http://localhost:3000
app.use(cors({
    origin: "http://localhost:3000"
}));

// Parsing incoming request bodies with JSON payloads
app.use(express.json());

// Parsing incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Connecting to the MongoDB database using the provided URI
connectDatabase(process.env.MONGO_URI);

// Route to handle creating a new Pizza post
app.post('/createPizza', async(req,res) => {
    console.log("Reached /createPizza route handler");

    // Extracting title, subtitle, and description from the request body
    const { title, subtitle, description } = req.body;
    console.log(title, subtitle, description);

    // Creating a new Pizza post using the Pizza model
    await Pizza.create({
        title: title,
        subtitle: subtitle,
        description: description
    });

    // Sending a JSON response indicating successful Pizza creation
    res.json({
        status: 200,
        message: "Pizza created successfully"
    });
});

// Route to fetch all Pizza posts
app.get('/pizza', async(req,res)=>{
    // Finding all Pizza posts in the database
    const Pizza = await Pizza.find();

    // Handling the case where no Pizzas are found
    if(Pizza.length == 0){
        res.json({
            status: 200,
            message : "Empty Pizzas",
        });
    } else {
        // Sending the found Pizza posts as a JSON response
        res.json({
            status: 200,
            message: "Pizzas fetched successfully",
            data : Pizza,
        });
    }
});

// Route to fetch a single Pizza post by its ID
app.get('/pizza/:id', async(req,res)=>{
    // Extracting the Pizza ID from the request parameters
    const { id } = req.params;

    // Finding the Pizza post by its ID
    const Pizza = await Pizza.find({ _id: id });

    // Handling the case where the Pizza post is not found
    if(Pizza.length == 0){
        res.json({
            status: 400,
            message: "Pizza not found"
        });
    } else {
        // Sending the found Pizza post as a JSON response
        res.status(200).json({
            message: "Single Pizza fetched successfully",
            data: Pizza
        });
    }
});

// Route to update a Pizza post by its ID
app.patch('/pizza/:id', async(req,res)=>{
    // Extracting the Pizza ID from the request parameters
    const { id } = req.params;

    // Extracting title, subtitle, and description from the request body
    const { title, subtitle, description } = req.body;

    // Updating the Pizza post with the provided ID
    const updatedPizza = await Pizza.findByIdAndUpdate(id,{
        title,
        subtitle,
        description
    });

    // Sending a JSON response indicating successful Pizza update
    res.status(200).json({
        message: "Pizza updated successfully"
    });
});

// Route to delete a Pizza post by its ID
app.delete('/pizza/:id', async(req,res)=>{
    // Extracting the Pizza ID from the request parameters
    const { id } = req.params;

    // Deleting the Pizza post with the provided ID
    await Pizza.findByIdAndDelete({ _id: id });

    // Sending a JSON response indicating successful Pizza deletion
    res.status(200).json({
        message : "Pizza deleted successfully"
    });
});

// Extracting the port number from environment variables
const PORT = process.env.PORT;

// Starting the server to listen on the specified port
app.listen(PORT, ()=>{
    console.log(`listening on port number ${PORT}`);
});



// continue form day 10