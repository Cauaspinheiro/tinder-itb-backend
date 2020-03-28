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

export default routes;
