import { Router } from 'express';

import deslikesRoutes from './deslikesRoutes';
import likesRoutes from './likesRoutes';
import prefsRoutes from './prefsRoutes';
import schoolRoutes from './schoolRoutes';
import userRoutes from './userRoutes';


const routes = Router();

deslikesRoutes(routes);
likesRoutes(routes);
prefsRoutes(routes);
schoolRoutes(routes);
userRoutes(routes);

export default routes;
