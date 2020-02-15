import UserController from '../controllers/UserController';

import auth from '../middlewares/Global/auth';
import authUser from '../middlewares/Global/authUser';
import sameUser from '../middlewares/Global/sameUser';
import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourse from '../middlewares/User/course';
import checkInfo from '../middlewares/User/info';
import notUser from '../middlewares/User/notUser';
import passwordHash from '../middlewares/User/password';
import getPrefs from '../middlewares/User/prefs';
import searchParams from '../middlewares/User/search';
import contactUpdate from '../middlewares/User/updateInfo/contact';
import passwordUpdate from '../middlewares/User/updateInfo/password';

export default (routes) => {
  routes.get('/users', auth,
    authUser,
    searchParams,
    getPrefs,
    UserController.index);

  routes.post('/users',
    notUser,
    checkInfo,
    passwordHash,
    getSchool,
    getCourse,
    UserController.store);


  routes.get('/users/:id', auth, sameUser,
    getUser,
    UserController.show);

  routes.put('/users/:id', auth, sameUser,
    getUser,
    passwordUpdate,
    passwordHash,
    contactUpdate,
    getSchool,
    getCourse,
    UserController.update);

  routes.delete('/users/:id', auth, sameUser,
    getUser,
    UserController.destroy);
};
