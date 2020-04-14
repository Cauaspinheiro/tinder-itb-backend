import { Router } from 'express';

import PrefsController from '../controllers/PrefsController';

import auth from '../middlewares/Global/auth';
import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourses from '../middlewares/Prefs/courses';
import notPrefs from '../middlewares/Prefs/notPrefs';
import getPrefs from '../middlewares/Prefs/prefs';

import validation from '../validation/prefs/store';


const routes = Router();

routes.post('/profile/prefs', auth,
  getUser,
  notPrefs,
  validation,
  getSchool,
  getCourses,
  PrefsController.store);


routes.get('/profile/prefs', auth,
  getUser,
  getPrefs,
  PrefsController.show);

routes.delete('/profile/prefs', auth,
  getUser,
  getPrefs,
  PrefsController.destroy);

routes.put('/profile/prefs', auth,
  getUser,
  getPrefs,
  getSchool,
  getCourses,
  PrefsController.update);

export default routes;
