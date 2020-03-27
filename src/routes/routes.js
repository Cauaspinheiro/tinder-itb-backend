import * as Sentry from '@sentry/node';
import { Router } from 'express';

import deslikesRoutes from './deslikesRoutes';
import imagesRoutes from './imagesRoutes';
import likesRoutes from './likesRoutes';
import matchsRoutes from './matchRoutes';
import prefsRoutes from './prefsRoutes';
import profileRoutes from './profileRoutes';
import schoolRoutes from './schoolRoutes';
import sessionRoutes from './sessionRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use(deslikesRoutes);
routes.use(imagesRoutes);
routes.use(likesRoutes);
routes.use(matchsRoutes);
routes.use(prefsRoutes);
routes.use(profileRoutes);
routes.use(schoolRoutes);
routes.use(sessionRoutes);
routes.use(userRoutes);

routes.use((err, req, res, next) => {
  Sentry.captureException(err);
  return res.status(500).json(err);
});

export default routes;
