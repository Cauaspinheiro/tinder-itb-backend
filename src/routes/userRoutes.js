import UserController from '../controllers/UserController';

import user from '../middlewares/User';

function loadUserRoutes(routes) {
  routes.get('/users', user.checkPrefs, UserController.index);

  routes.post('/users',
    user.checkNotExists,
    user.checkSchool,
    user.checkCourse,
    UserController.store);


  routes.get('/users/:id',
    user.checkExists,
    UserController.show);

  routes.put('/users/:id',
    user.checkExists,
    user.checkSchool,
    user.checkCourse,
    UserController.update);

  routes.delete('/users/:id',
    user.checkExists,
    UserController.destroy);
}

export default loadUserRoutes;
