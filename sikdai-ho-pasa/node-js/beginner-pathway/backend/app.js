// Import necessary modules
const express = require('express');
const { blogs } = require('./model/index');
const app = express();

// Database connection (already present in the require("./model/index"); line)

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to handle incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Render the home page with some example blog data
app.get('/', (req, res) => {
  const blogData = [
    { title: 'Title 1', content: 'Content 1', author: 'Author 1', publishedDate: 'Date 1' },
    { title: 'Title 2', content: 'Content 2', author: 'Author 2', publishedDate: 'Date 2' },
    // Add more blog objects as needed
  ];

  res.render('blogs', { blogs: blogData });
});

// Render the blog creation form
app.get('/form', (req, res) => {
  res.render('form.ejs');
});

// Render the create blog form
app.get("/createBlog", (req, res) => {
  res.render("createBlog");
});

// Create Blog Post Route
app.post("/createBlog", async (req, res) => {
  const { title, subtitle, content } = req.body;

  try {
    // Create a new blog using the 'blogs' model
    const newBlog = await blogs.create({
      title: title,
      subTitle: subtitle,
      content: content
    });

    console.log("New blog created:", newBlog); // Optional: log the created blog

    res.redirect("/"); // Redirect to the home page after successful creation
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Error creating blog");
  }
});

// Listen on port 8000
app.listen(8000, () => {
  console.log('Listening to port 8000');
});
