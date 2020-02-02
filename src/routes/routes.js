import { Router } from 'express';

import loadPrefsRoutes from './prefsRoutes';
import loadSchoolRoutes from './schoolRoutes';
import loadUserRoutes from './userRoutes';


const routes = Router();


loadPrefsRoutes(routes);
loadSchoolRoutes(routes);
loadUserRoutes(routes);

export default routes;
