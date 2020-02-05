import PrefsController from '../controllers/PrefsController';

import auth from '../middlewares/Global/auth';
import sameUser from '../middlewares/Global/sameUser';
import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourses from '../middlewares/Prefs/courses';
import notPrefs from '../middlewares/Prefs/notPrefs';
import getPrefs from '../middlewares/Prefs/prefs';

export default (routes) => {
  routes.post('/users/:id/prefs', auth, sameUser,
    getUser,
    notPrefs,
    getSchool,
    getCourses,
    PrefsController.store);


  routes.get('/users/:id/prefs', auth, sameUser,
    getUser,
    getPrefs,
    PrefsController.show);

  routes.delete('/users/:id/prefs', auth, sameUser,
    getUser,
    getPrefs,
    PrefsController.destroy);

  routes.put('/users/:id/prefs', auth, sameUser,
    getUser,
    getPrefs,
    getSchool,
    getCourses,
    PrefsController.update);
};
