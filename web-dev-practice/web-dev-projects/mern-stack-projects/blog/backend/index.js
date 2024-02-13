const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors module

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the HTTP methods you want to allow
};

app.use(express.static('public'));
// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

// Handle MongoDB connection events
dbConnection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

dbConnection.once('open', () => {
  console.log('Connected to MongoDB');
});




app.post('/createBlog', async (req,res)=>{
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;

   await Blog.create({
    title:title,
    subtitle: subtitle,
    description: description,

  })

  res.json({
    status: 200,
    message: "Success",
  })
})

// Get All Blogs 
app.get('/blog', async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) {
      res.status(404).json({
        message: 'Empty Blog'
      });
    } else {
      res.status(200).json({
        message: 'Blogs fetched successfully',
        data: blogs
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while fetching blogs',
      error: error.message
    });
  }
});

//Get Single Blog
// Get Blog by ID
app.get('/blog/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json({
        message: 'Blog fetched successfully',
        data: blog
      });
    } else {
      res.status(404).json({
        message: 'Blog not found'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while fetching the blog',
      error: error.message
    });
  }
});

//Update
app.patch('/blog/:id', async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description
  // const {title, subtitle, description} = req.body

  await Blog.findByIdAndUpdate(id,{
    title:title,
    subtitle: subtitle,
    description: description
  });

  res.status(200).json({
    message: 'Blog updated successfully'
  })
})


app.delete('/blog/:id', async (req,res)=>{
  const id = req.params.id
  // const {id} = req.params
  await Blog.findByIdAndDelete(id)
  res.status(200).json({
    message: "Blog deleted Successfully"
  })
})

// Start the Express server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
