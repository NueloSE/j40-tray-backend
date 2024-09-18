import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoutes';

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to database!'));

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'https://j40-tray-frontend.onrender.com',
    credentials: true,
  })
);

app.get('/health', async (req: Request, res: Response) => {
  res.send({ message: 'health OK!' });
});

// define user endpoints
app.use('/api/my/user', myUserRoute);

app.listen(8000, () => {
  console.log('server start on localhost:8000');
});
