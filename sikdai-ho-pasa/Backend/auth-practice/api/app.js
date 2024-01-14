import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose"
import { connectToDatabase } from './database/database.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());

//DATABASE CONNECTION
connectToDatabase()

app.use("/api/auth", authRoutes)
app.use('/api/user', userRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
