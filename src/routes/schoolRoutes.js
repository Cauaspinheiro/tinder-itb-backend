import { Router } from 'express';

import SchoolController from '../controllers/SchoolController';

import invalidId from '../errors/id';

const routes = Router();

routes.get('/schools', SchoolController.index);
routes.get('/schools/:id', SchoolController.show);
routes.post('/schools', SchoolController.store);
routes.put('/schools/:id', SchoolController.update);
routes.delete('/schools/:id', SchoolController.destroy);

routes.use(invalidId);

export default routes;
