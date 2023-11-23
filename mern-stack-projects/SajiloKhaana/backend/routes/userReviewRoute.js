const { addProductReview } = require('../controller/admin/user/userController');
const { createReview, getProductReview, deleteReview } = require('../controller/user/userController');
const isAuthenticated = require('../middleware/isAuthenticated');
const catchAsync = require('../services/catchAsync')
const router = require('express').Router();

router.route('/reviews').post(isAuthenticated, catchAsync(createReview));
router.route('/reviews/:id').get(getProductReview).delete(isAuthenticated,deleteReview).post(isAuthenticated, catchAsync(createReview))

module.exports = router;