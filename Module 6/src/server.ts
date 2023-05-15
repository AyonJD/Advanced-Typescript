import mongoose from 'mongoose';
import app from './app';

const port = 5000;

async function dbConnection() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test_db');
      console.log('Connected to MongoDB');
      
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

dbConnection();