import { Router } from 'express';

import loadDeslikesRoutes from './deslikesRoutes';
import loadLikesRoutes from './likesRoutes';
import loadPrefsRoutes from './prefsRoutes';
import loadSchoolRoutes from './schoolRoutes';
import loadUserRoutes from './userRoutes';


const routes = Router();


loadPrefsRoutes(routes);
loadSchoolRoutes(routes);
loadUserRoutes(routes);
loadLikesRoutes(routes);
loadDeslikesRoutes(routes);

export default routes;
