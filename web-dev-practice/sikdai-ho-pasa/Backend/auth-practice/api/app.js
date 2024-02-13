import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose"
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDatabase } from './database/database.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

//DATABASE CONNECTION
connectToDatabase()

// Enable CORS only for requests from http://localhost:3000
app.use(cors({ origin: 'http://localhost:5173/' }));


app.use("/api/auth", authRoutes)
app.use('/api/user', userRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
