import express, { Request, Response } from 'express';
import cors from 'cors'; //for handling cross-origin requests
import 'dotenv/config'; // for loading environment variables
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoutes';

// Connect to MongoDB using the connection string from environment variables
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to database!'));

const app = express();
app.use(express.json());

// Configure CORS to allow requests from a specific origin and include credentials
app.use(
  cors({
    origin: 'https://j40-tray-frontend.onrender.com',
    credentials: true,
  })
);

// Define a health check endpoint to verify if the server is running
app.get('/health', async (req: Request, res: Response) => {
  res.send({ message: 'health OK!' });
});

// Define routes for user-related API endpoints
app.use('/api/my/user', myUserRoute);

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log('server start on localhost:8000');
});
