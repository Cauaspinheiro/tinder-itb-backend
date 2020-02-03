import UserController from '../controllers/UserController';

import getHeaderUser from '../middlewares/Global/headerUser';
import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourse from '../middlewares/User/course';
import checkInfo from '../middlewares/User/info';
import notUser from '../middlewares/User/notUser';
import getPrefs from '../middlewares/User/prefs';
import searchParams from '../middlewares/User/search';

export default (routes) => {
  routes.get('/users',
    getHeaderUser,
    (req, res, next) => {
      const { headerUser: user } = req;
      req.user = user;
      next();
    },
    searchParams,
    getPrefs,
    UserController.index);

  routes.post('/users',
    notUser,
    checkInfo,
    getSchool,
    getCourse,
    UserController.store);


  routes.get('/users/:id',
    getUser,
    UserController.show);

  routes.put('/users/:id',
    getUser,
    checkInfo,
    getSchool,
    getCourse,
    UserController.update);

  routes.delete('/users/:id',
    getUser,
    UserController.destroy);
};
