// Import the Mongoose library for working with MongoDB
import mongoose from 'mongoose';

// Define the 'Connection' function to establish a connection to the MongoDB database
// This function will be called to connect to the database when the application starts
const Connection = async (DATABASE_URL) => {
  try {
    // Attempt to connect to the MongoDB database using the provided DATABASE_URL
    // The options object includes 'useUnifiedTopology: true' and 'useNewUrlParser: true' to ensure compatibility with the latest MongoDB drivers
    await mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });

    // If the connection is successful, log a message to the console indicating that the database connection is established
    console.log('Database connection established');
  } catch (error) {
    // If an error occurs while connecting to the database, log the error message to the console
    console.log('Error while connecting with the database', error);
  }
};

// Export the 'Connection' function to use it in other parts of the application
export default Connection;
