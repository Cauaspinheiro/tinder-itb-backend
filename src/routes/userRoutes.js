import UserController from '../controllers/UserController';

import auth from '../middlewares/Global/auth';
import targetUser from '../middlewares/Global/targetUser';
import getUser from '../middlewares/Global/user';
import getPrefs from '../middlewares/User/prefs';
import searchParams from '../middlewares/User/search';


export default (routes) => {
  routes.get('/users', auth,
    getUser,
    searchParams,
    getPrefs,
    UserController.index);

  routes.get('/users/:id',
    targetUser,
    UserController.show);
};
