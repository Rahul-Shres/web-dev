// Import the Mongoose library for working with MongoDB
import mongoose from "mongoose";

// Define the user schema for the MongoDB collection
const userSchema = mongoose.Schema({
    name: String,       // Field to store the user's name as a String
    username: String,   // Field to store the user's username as a String
    email: String,      // Field to store the user's email address as a String
    phone: String,      // Field to store the user's phone number as a String
});

// Create a Mongoose model for the 'user' collection based on the defined userSchema
// The 'user' model will allow us to interact with the 'user' collection in the database
const user = mongoose.model('user', userSchema);

// Export the 'user' model to use it in other parts of the application
export default user;
