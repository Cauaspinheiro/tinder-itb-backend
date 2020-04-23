import { Router } from 'express';

import celebrateError from '../errors/celebrate';
import errorId from '../errors/id';
import notRoute from '../errors/notRoute';
import sendSentry from '../errors/sentry';
import dislikesRoutes from './dislikesRoutes';
import imagesRoutes from './imagesRoutes';
import likesRoutes from './likesRoutes';
import matchsRoutes from './matchRoutes';
import profileRoutes from './profileRoutes';
import schoolRoutes from './schoolRoutes';
import sessionRoutes from './sessionRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use(dislikesRoutes);
routes.use(imagesRoutes);
routes.use(likesRoutes);
routes.use(matchsRoutes);
routes.use(profileRoutes);
routes.use(schoolRoutes);
routes.use(sessionRoutes);
routes.use(userRoutes);

routes.use(notRoute);

routes.use(errorId, celebrateError, sendSentry);

export default routes;
