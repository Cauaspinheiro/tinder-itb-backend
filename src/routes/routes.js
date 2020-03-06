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

deslikesRoutes(routes);
likesRoutes(routes);
prefsRoutes(routes);
schoolRoutes(routes);
userRoutes(routes);
matchsRoutes(routes);
sessionRoutes(routes);
profileRoutes(routes);
imagesRoutes(routes);


export default routes;
