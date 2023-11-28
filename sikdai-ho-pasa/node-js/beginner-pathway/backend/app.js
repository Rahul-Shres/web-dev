// Import necessary modules
const express = require('express');
const { blogs, users } = require('./model/index');
const app = express();
const bcrypt = require('bcryptjs');

// Database connection (already present in the require("./model/index"); line)

// Set the view engine to EJS
app.set('view engine', 'ejs');
// nodejs lai  file access garna dey vaneko hae yo code lay 
app.use(express.static("public/"))
// Middleware to handle incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Render the home page with some example blog data
app.get('/', async (req, res) => {
 //Table bata data nikalna paryo
  const allBlogs = await blogs.findAll() // array ma data return garxa
  // blogs vanne table bata sabai data dey vaneko
  console.log(allBlogs);
  const blogData = allBlogs.map(blog => ({
    id: blog.dataValues.id,
    title: blog.dataValues.title,
    subtitle: blog.dataValues.subTitle,
    content: blog.dataValues.content,
    author: blog.dataValues.author, // Assuming there's an 'author' property in the blog data
    publishedDate: blog.dataValues.createdAt // Assuming createdAt is in the desired format, otherwise, format it accordingly
  }));

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

// Table ma blog kasari halne
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

//Table bata single blog kasari nikalne

// single blog page 
app.get("/single/:id",async(req,res)=>{
  const id = req.params.id
  // second approach
  // const {id} = req.params 
  // id ko data magnu/find garnu paryo hamro table bata
  const blog =  await blogs.findAll({
      where : {
          id : id
      }
  })
  // second finding approach
  // const blog = await blogs.findByPk(id)
    console.log(blog)
      res.render("singleBlog",{blog:blog})
  })


  // Delete a blog
app.get('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await blogs.destroy({
      where: {
        id: id
      }
    });
    res.redirect('/'); // Redirect to the home page after deletion
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: 'Error deleting blog' });
  }
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

  try {
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

    res.redirect("/single/" + id); // Redirect to the single blog page after update
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: 'Error updating blog' });
  }
});

  
// Render the blog creation form
app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide username, email, and password' });
    }
    
    const createUser = await users.create({
      username: username,
      email: email,
      password: bcrypt.hashSync(password,8)
    });
    
    // Handle success (e.g., send a response)
    res.status(201).redirect('/');
  } catch (error) {
    // Handle error (e.g., send an error response)
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});


// Listen on port 8000
app.listen(8000, () => {
  console.log('Listening to port 8000');
});