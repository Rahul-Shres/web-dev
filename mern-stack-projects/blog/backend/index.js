const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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


//GET API
app.get("/",(req,res) => {
  res.json({
    status: 200,
    message: "Success",
  })
})

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
// Start the Express server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
