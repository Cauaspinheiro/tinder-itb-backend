import UserController from '../controllers/UserController';

import auth from '../middlewares/Global/auth';
import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourse from '../middlewares/User/course';
import checkInfo from '../middlewares/User/info';
import notUser from '../middlewares/User/notUser';
import passwordHash from '../middlewares/User/password';
import getPrefs from '../middlewares/User/prefs';
import searchParams from '../middlewares/User/search';
import contactUpdate from '../middlewares/User/updateInfo/contact';
import courseUpdate from '../middlewares/User/updateInfo/course';
import passwordUpdate from '../middlewares/User/updateInfo/password';

export default (routes) => {
  routes.get('/users', auth,
    getUser,
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


  routes.get('/users/show', auth,
    getUser,
    UserController.show);

  routes.put('/users', auth,
    getUser,
    passwordUpdate,
    passwordHash,
    contactUpdate,
    getSchool,
    courseUpdate,
    UserController.update);

  routes.delete('/users', auth,
    getUser,
    UserController.destroy);
};
