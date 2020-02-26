import ProfileController from '../controllers/ProfileController';

import auth from '../middlewares/Global/auth';
import getSchool from '../middlewares/Global/school';
import user from '../middlewares/Global/user';
import getCourse from '../middlewares/Profile/course';
import checkInfo from '../middlewares/Profile/info';
import notUser from '../middlewares/Profile/notUser';
import passwordHash from '../middlewares/Profile/password';
import contactUpdate from '../middlewares/Profile/Update/contact';
import courseUpdate from '../middlewares/Profile/Update/course';
import passwordUpdate from '../middlewares/Profile/Update/password';

export default (routes) => {
  routes.get('/profile', auth, user, ProfileController.show);

  routes.post('/profile',
    notUser,
    checkInfo,
    passwordHash,
    getSchool,
    getCourse,
    ProfileController.store);


  routes.put('/profile', auth,
    user,
    passwordUpdate,
    passwordHash,
    contactUpdate,
    getSchool,
    courseUpdate,
    ProfileController.update);

  routes.delete('/profile', auth,
    user,
    ProfileController.destroy);
};
