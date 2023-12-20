const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../model/userModel');
const { adminSeeder } = require('../adminSeeder');
dotenv.config();

exports.connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log('Connected to MongoDB');
        // Invoking admin seeder
       adminSeeder()
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // You might want to handle the error in a specific way or throw it further.
        // For instance, you can throw the error to be caught and handled in the calling code.
        throw error;
    }
};
