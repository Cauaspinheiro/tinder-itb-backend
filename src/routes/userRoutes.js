import { Router } from 'express';

import UserController from '../controllers/UserController';

import auth from '../middlewares/Global/auth';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import prefs from '../middlewares/User/prefs';
import searchParams from '../middlewares/User/search';


const routes = Router();

routes.get('/users', auth,
  user,
  searchParams,
  prefs,
  UserController.index);

routes.get('/users/:id',
  targetUser,
  UserController.show);


export default routes;
