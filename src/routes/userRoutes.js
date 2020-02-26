import UserController from '../controllers/UserController';

import auth from '../middlewares/Global/auth';
import getUser from '../middlewares/Global/user';
import getPrefs from '../middlewares/User/prefs';
import searchParams from '../middlewares/User/search';


export default (routes) => {
  routes.get('/users', auth,
    getUser,
    searchParams,
    getPrefs,
    UserController.index);

  routes.get('/users/show', auth,
    getUser,
    UserController.show);
};
