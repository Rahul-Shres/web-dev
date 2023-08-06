// Import the 'User' model from the 'user-schema.js' file
// The 'User' model allows us to interact with the 'user' collection in the MongoDB database
import User from '../schema/user-schema.js';

// Define the 'addUser' function to handle adding a new user to the database
export const addUser = async (req, res) => {
    console.log('Hello'); // Log a message to the console for debugging purposes

    // Extract the user data from the request body
    const user = req.body;
    console.log(user); // Log the user data to the console for debugging purposes

    // Create a new instance of the 'User' model with the user data
    const newUser = new User(user);

    try {
        // Save the new user to the database using the 'save' method of the 'User' model
        await newUser.save();

        // If the user is successfully added, send a response with status code 201 and the JSON data of the new user
        res.status(201).json(newUser);
    } catch (error) {
        // If an error occurs while saving the user to the database, send a response with status code 409 and an error message
        res.status(409).json({ message: error.message });
    }
};
