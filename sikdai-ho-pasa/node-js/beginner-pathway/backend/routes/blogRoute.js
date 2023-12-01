
//Rest Full Api

const { renderCreateBlog, createNewBlog, fillSinglePageForm, deleteBlog, editBlog, updateBlog } = require('../controller/blog/blogController');
const { isAuthenticated } = require('../middleware/isAuth');

const router = require('express').Router();

router.route('/createBlog').get(renderCreateBlog).post(isAuthenticated, createNewBlog)
router.route('/single/:id').get(fillSinglePageForm)
router.route('/delete/:id').get(deleteBlog)
router.route('/edit/:id').get(editBlog)
router.route('/updateBlog/:id').post(updateBlog)


module.exports = router;