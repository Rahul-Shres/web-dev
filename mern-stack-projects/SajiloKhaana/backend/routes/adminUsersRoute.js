// adminUsersRoute.js

const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const restrictTo = require('../middleware/restrictTo');
const {getUsers} = require('../controller/admin/user/userController')
// const { getUsers } = require('../controller/user/userController');
const router = express.Router();

// Define the route with the proper middleware and callback function
router.route('/users').get(isAuthenticated, restrictTo('admin'),getUsers);

module.exports = router;
