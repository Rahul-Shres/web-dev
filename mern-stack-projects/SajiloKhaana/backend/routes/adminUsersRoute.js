// adminUsersRoute.js

const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const restrictTo = require('../middleware/restrictTo');
const { getUsers, deleteUser } = require('../controller/admin/user/userController'); // Ensure correct path to the controller
const router = express.Router();

// Define the routes with the proper middleware and callback functions
router.route('/user').get(isAuthenticated, restrictTo('admin'), getUsers);
router.route('/users/:id').delete(isAuthenticated, restrictTo('admin'), deleteUser);

module.exports = router;
