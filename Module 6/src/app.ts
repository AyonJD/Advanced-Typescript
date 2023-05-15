import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

// Application Routes imports will be here
import userRoutes from './app/modules/user_module/user.route';

const app: Application = express();

// To prevent CORS errors
app.use(cors())

// To parse incoming requests with JSON payloads
app.use(express.json())

// To parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }))

// All Routes will be here
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('<h1 style="box-sizing:border-box; color: red; height: 100%; width: 100%; display: flex; align-items: center; justify-content:center;">Practice server running!</h1>');
});
app.use(`/api/v1/user`, userRoutes)
  
  export default app;