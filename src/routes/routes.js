import { Router } from 'express';

import deslikesRoutes from './deslikesRoutes';
import likesRoutes from './likesRoutes';
import prefsRoutes from './prefsRoutes';
import schoolRoutes from './schoolRoutes';
import sessionRoutes from './sessionRoutes';
import userRoutes from './userRoutes';


const routes = Router();

deslikesRoutes(routes);
likesRoutes(routes);
prefsRoutes(routes);
schoolRoutes(routes);
userRoutes(routes);
sessionRoutes(routes);

export default routes;
