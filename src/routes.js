import { Router } from 'express';

import PrefsController from './controllers/PrefsController';
import SchoolController from './controllers/SchoolController';
import UserController from './controllers/UserController';

import checkCourse from './middlewares/User/checkCourse';
import checkSchool from './middlewares/User/checkSchool';
import checkUserExists from './middlewares/User/checkUserExists';
import checkUserNotExists from './middlewares/User/checkUserNotExists';


const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World!' }));

routes.get('/users', UserController.index);

routes.get('/users/:id', checkUserExists, UserController.show);

routes.post('/users',
  checkUserNotExists,
  checkSchool,
  checkCourse,
  UserController.store);

routes.put('/users/:id',
  checkUserExists,
  checkSchool,
  checkCourse,
  UserController.update);

routes.delete('/users/:id',
  checkUserExists,
  UserController.destroy);

routes.get('/schools', SchoolController.index);
routes.get('/schools/:id', SchoolController.show);
routes.post('/schools', SchoolController.store);
routes.put('/schools/:id', SchoolController.update);
routes.delete('/schools/:id', SchoolController.destroy);

routes.get('/users/:id/prefs', checkUserExists, PrefsController.show);
routes.post('/users/:id/prefs', checkUserExists, PrefsController.store);
routes.put('/users/:id/prefs', checkUserExists, PrefsController.update);
routes.delete('/users/:id/prefs', checkUserExists, PrefsController.destroy);

export default routes;
