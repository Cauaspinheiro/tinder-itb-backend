import * as Sentry from '@sentry/node';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './App';

dotenv.config();
mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => { app.listen(process.env.PORT || 3001); }).catch((err) => {
  Sentry.captureException(err);

  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
