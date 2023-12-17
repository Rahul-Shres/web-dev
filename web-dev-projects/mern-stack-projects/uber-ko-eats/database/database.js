const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

exports.connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // You might want to handle the error in a specific way or throw it further.
        // For instance, you can throw the error to be caught and handled in the calling code.
        throw error;
    }
};
