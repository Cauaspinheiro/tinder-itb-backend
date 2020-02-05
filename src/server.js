import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './App';

dotenv.config();
mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(3001);
