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
const fs = require('fs'); // Import the fs module

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
    const allowedFileTypes = ['image/png','image/jpeg','image/jpg']
        if(!allowedFileTypes.includes(file.mimetype)){
            cb(new Error("This filetype is not supported")) // cb(error)
            return
        }
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null,Date.now()+ "-"+ file.originalname)
  },
});

const upload = multer({ storage: storage });

// Routes

//create blog

app.post('/api/blog', upload.single('image'), async (req, res) => {
  
  try {
    const { title, content } = req.body;
    console.log(title,"title", content, "content")
    let image ;
    if(!req.file){
      image = "https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
    }else{
      image = "http://localhost:8000/" + req.file.filename
    }
    console.log(image, 'image path');
    const blogPost = new BlogPost({ title, content, image });
    await blogPost.save();
    console.log(blogPost, 'blog post');
    res.json({ success: true, message: 'Blog post created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



  // Update a blog post

app.put('/api/blog/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    
    let imageUrl;
    // Check if a file is uploaded
    if (req.file) {
      // If a file is uploaded, construct the new image URL
      imageUrl = "http://localhost:8000/" + req.file.filename;

      // Retrieve the old blog post data to get the previous image path
      const oldPost = await BlogPost.findById(id);
      if (oldPost && oldPost.image) {
        // Extract the file name from the old image URL
        const oldFileName = oldPost.image.split('/').pop();
        // Construct the path to the old image file
        const filePath = `storage/${oldFileName}`;
        
        // Delete the old image file
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Old image file deleted successfully");
          }
        });
      }
    }

    // Find and update the blog post
    const updatedPost = await BlogPost.findByIdAndUpdate(id, { title, content, image: imageUrl }, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    
    res.json({ success: true, message: 'Blog post updated successfully', data: updatedPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



app.get('/api/blog', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single blog post by ID
app.get('/api/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPost.findById(id);

    if (!blogPost) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete a blog post by ID
app.delete('/api/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    
    res.json({ success: true, message: 'Blog post deleted successfully', data: deletedPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


// Get three most recent blog posts
app.get('/api/blog/recent', async (req, res) => {
  try {
    const recentBlogs = await BlogPost.find().sort({ createdAt: -1 }).limit(3);
    res.json(recentBlogs);
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


app.use(express.static("./uploads/"))


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
