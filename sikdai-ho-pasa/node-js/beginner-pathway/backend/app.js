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
app.get('/', async (req, res) => {
  const allBlogs = await blogs.findAll();
  const blogData = allBlogs.map(blog => ({
    id: blog.dataValues.id,
    title: blog.dataValues.title,
    subtitle: blog.dataValues.subTitle,
    content: blog.dataValues.content,
    author: blog.dataValues.author,
    publishedDate: blog.dataValues.createdAt
  }));

  res.status(200).json(blogData); // Sending JSON data
});

// Render the blog creation form
app.get('/form', (req, res) => {
  res.render('form.ejs');
});

// Render the create blog form
app.get("/createBlog", (req, res) => {
  res.render("createBlog");
});

// Create a new blog
app.post("/createBlog", async (req, res) => {
  const { title, subtitle, content } = req.body;

  try {
    const newBlog = await blogs.create({
      title: title,
      subTitle: subtitle,
      content: content
    });

    console.log("New blog created:", newBlog);

    res.redirect("/");
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Error creating blog");
  }
});

// Get a single blog
app.get("/single/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await blogs.findAll({
    where: {
      id: id
    }
  });

  res.status(200).json(blog); // Sending JSON data
});

// Delete a blog
app.get('/delete/:id', async (req, res) => {
  const id = req.params.id;

  await blogs.destroy({
    where: {
      id: id
    }
  });

  res.status(200).json({ message: 'Blog deleted successfully' }); // Sending JSON response
});

// Edit a blog
app.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const blog = await blogs.findAll({
    where: {
      id: id
    }
  });

  res.render('editBlog', { blog: blog });
});

// Update a blog
app.post("/updateBlog/:id", async (req, res) => {
  const id = req.params.id;
  const { title, subTitle, content } = req.body;

  await blogs.update({
    title: title,
    subTitle: subTitle,
    content: content
  },
    {
      where: {
        id: id,
      }
    });

  res.status(200).json({ message: 'Blog updated successfully' }); // Sending JSON response
});

// Listen on port 8000
app.listen(8000, () => {
  console.log('Listening to port 8000');
});
