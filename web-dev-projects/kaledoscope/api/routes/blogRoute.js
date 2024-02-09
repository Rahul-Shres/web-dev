const { createBlog, updateBlog, deleteBlog, getMyBlogs } = require("../controller/blog");

const router = require("express").Router()
router.route("/").post(createBlog).patch(updateBlog).delete(deleteBlog).get(getMyBlogs)

module.exports = router;