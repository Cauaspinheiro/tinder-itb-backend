import * as Sentry from '@sentry/node';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import routes from './routes/routes';

class App {
  constructor() {
    if (process.env.SENTRY_DSN) {
      Sentry.init({
        dsn: process.env.SENTRY_DSN,
        captureUnhandledRejections: true,
      });
    }

    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
