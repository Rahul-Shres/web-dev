
//Rest Full Api

const { renderCreateBlog, createNewBlog, fillSinglePageForm, deleteBlog, editBlog, updateBlog } = require('../controller/blog/blogController');

const router = require('express').Router();

router.route('/createBlog').get(renderCreateBlog).post(createNewBlog)
router.route('/single/:id').get(fillSinglePageForm)
router.route('/delete/:id').get(deleteBlog)
router.route('/edit/:id').get(editBlog)
router.route('/updateBlog/:id').post(updateBlog)


module.exports = router;