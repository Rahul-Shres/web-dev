// Import the Express framework to create router
import express from 'express';

// Create an instance of the Express router
const router = express.Router();

// Import the 'addUser' function from the user-controller.js file
// This function will handle the logic for adding a new user to the database
import { addUser, getUsers, getUser, editUser } from '../controller/user-controller.js';

// Define a route to handle HTTP POST requests with the path '/add'
// When a POST request is received with this path, the 'addUser' function from user-controller.js will be executed
router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);

// Export the router to be used in other parts of the application
export default router;
