const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');

// APIs

// Create a new blog
router.post('/createBlog', async (req, res) => {
    try {
      const { title, subtitle, description } = req.body;
  
      if (!title || !subtitle || !description) {
        // Check if required data is missing and respond with a 400 Bad Request
        return res.status(400).json({ message: 'Missing required data' });
      }
  
      const blog = new Blog({
        title,
        subtitle,
        description,
      });
  
      const newBlog = await blog.save();
  
      // Check if the blog was successfully created
      if (newBlog) {
        // Respond with a 201 Created status and the created blog
        res.status(201).json(newBlog);
      } else {
        // If for some reason the blog creation failed, respond with a 500 Internal Server Error
        res.status(500).json({ message: 'Failed to create a new blog' });
      }
    } catch (err) {
      // Handle any other unexpected errors by logging them and returning a 500 Internal Server Error
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  // Update single blog
  // Update a task
// Update single blog
router.patch('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Update only if the fields are provided in the request body
    if (req.body.title) blog.title = req.body.title;
    if (req.body.subtitle) blog.subtitle = req.body.subtitle;
    if (req.body.description) blog.description = req.body.description;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    // Handle validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }

    // Handle other errors
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})


// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (!blogs || blogs.length === 0) {
      // If no blogs are found, return a 404 Not Found response
      res.status(404).json({ message: 'No blogs found.' });
    } else {
      // If blogs are found, return a 200 OK response with the data
      res.status(200).json(blogs);
    }
  } catch (err) {
    // Handle the error by logging it and returning a 500 Internal Server Error
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      // If the blog with the specified ID was not found, return a 404 Not Found response
      return res.status(404).json({ message: 'Blog not found' });
    }

    // If the blog is found, return a 200 OK response with the blog data
    res.status(200).json(blog);
  } catch (err) {
    // Handle any other errors by logging them and returning a 500 Internal Server Error
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// Delete blog
router.delete('/:id', async (req, res) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  
      if (!deletedBlog) {
        // If the blog with the specified ID was not found, return a 404 Not Found response
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // If the blog was successfully deleted, return a 200 OK response
      res.status(200).json({ message: 'Blog deleted' });
    } catch (err) {
      // Handle any other errors by logging them and returning a 500 Internal Server Error
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  


module.exports = router;
