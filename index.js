import express from 'express';
import { deleteData } from './models/Movies.js';
import connectDB from './db/connectDB.js';

const app = express();
const port = process.env.PORT || 8000; //get the port from .env file
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/test";

connectDB(DATABASE_URL);
deleteData('6608ea024af28e1171fc5501');

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});