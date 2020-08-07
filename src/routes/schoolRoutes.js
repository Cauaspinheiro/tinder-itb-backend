import { Router } from 'express';

import SchoolController from '../controllers/SchoolController';


const routes = Router();

routes.get('/schools', SchoolController.index);
routes.get('/schools/:id', SchoolController.show);

export default routes;
