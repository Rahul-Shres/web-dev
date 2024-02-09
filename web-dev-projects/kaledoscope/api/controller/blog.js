const Blog = require("../models/blog");

exports.createBlog = (req, res, next) => {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
    });
    blog.save()
        .then(blog => {
            if (blog) {
                res.status(201).json({
                    message: "blog added successfully",
                    blog: {
                        ...blog._doc,
                        id: blog._id
                    }
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};

exports.getMyBlogs = (req, res, next) => {
    Blog.find({ creator: req.userData.userId })
        .then(blogs => {
            res.status(200).json({
                message: "blogs fetched successfully!",
                blogs: blogs
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};

exports.updateBlog = (req, res, next) => {
    const blog = new Blog({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content,
    });
    Blog.updateOne({ _id: req.params.id }, blog)
        .then(result => {
            if (result.nModified > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(404).json({ message: "blog not found!" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};

exports.deleteBlog = (req, res, next) => {
    Blog.deleteOne({ _id: req.params.id, creator: req.userData.userId })
        .then(result => {
            if (result.deletedCount > 0) {
                res.status(200).json({ message: "Deletion successful!" });
            } else {
                res.status(404).json({ message: "Blog not found!" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};
