const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const connectToDB = require('./db/database');
const BlogPost = require('./models/blog'); // Import the BlogPost model
const Demo = require('./models/demoModel');

const app = express();

// Connect to database
connectToDB(process.env.MONGO);

// Middleware
app.use(cors({
    origin: "*",
  }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes


app.post('/api/blog', upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(title,"title", content, "content")
    const image = req.file.path;
    console.log(image, 'image path');
    const blogPost = new BlogPost({ title, content, image });
    await blogPost.save();
    console.log(blogPost, 'blog post');
    res.json({ success: true, message: 'Blog post created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/api/blog', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create a demo booking
app.post('/api/demo', async (req, res) => {
  try {
      const { name, email, phoneNumber, location, classType } = req.body;
      console.log(name, email, phoneNumber, location, classType);
      const demo = new Demo({ name, email, phoneNumber, location, classType });
      await demo.save();
      console.log(demo, 'demo');
      res.json({ success: true, message: 'Demo booking created successfully' });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
});

// Get all demo bookings
app.get('/api/demo', async (req, res) => {
  try {
      const demoBookings = await Demo.find();
      res.json(demoBookings);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
