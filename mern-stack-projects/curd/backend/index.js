// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://user:admin123@cluster0.6vneyaf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Task model and routes
const taskRouter = require('./routes/task');
app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
