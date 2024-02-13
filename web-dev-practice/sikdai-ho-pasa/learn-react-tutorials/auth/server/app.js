// server/app.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin123@google-o-auth.wom5r5q.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
