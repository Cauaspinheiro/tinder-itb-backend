import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import auth from '../middlewares/Global/auth';
import getSchool from '../middlewares/Global/school';
import user from '../middlewares/Global/user';
import getCourse from '../middlewares/Profile/course';
import deleteImages from '../middlewares/Profile/deleteImages';
import checkInfo from '../middlewares/Profile/info';
import notUser from '../middlewares/Profile/notUser';
import passwordHash from '../middlewares/Profile/password';
import prefsCourse from '../middlewares/Profile/prefsCourse';
import prefsSchool from '../middlewares/Profile/prefsSchool';
import contactUpdate from '../middlewares/Profile/Update/contact';
import courseUpdate from '../middlewares/Profile/Update/course';
import passwordUpdate from '../middlewares/Profile/Update/password';

import storeValidation from '../validation/profile/store';
import updateValidation from '../validation/profile/update';

const routes = Router();

routes.get('/profile', auth, user, ProfileController.show);

routes.post('/profile',
  notUser,
  storeValidation,
  checkInfo,
  prefsSchool,
  prefsCourse,
  passwordHash,
  getSchool,
  getCourse,
  ProfileController.store);


routes.put('/profile', auth,
  updateValidation,
  user,
  passwordUpdate,
  passwordHash,
  prefsSchool,
  prefsCourse,
  contactUpdate,
  getSchool,
  courseUpdate,
  ProfileController.update);

routes.delete('/profile', auth,
  user,
  deleteImages,
  ProfileController.destroy);

export default routes;
