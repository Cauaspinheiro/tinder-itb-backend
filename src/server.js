import dotenv from "dotenv";
import app from "./App";
import mongoose from "mongoose";

dotenv.config();
mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3001);
