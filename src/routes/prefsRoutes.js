import PrefsController from '../controllers/PrefsController';

import auth from '../middlewares/Global/auth';
import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourses from '../middlewares/Prefs/courses';
import notPrefs from '../middlewares/Prefs/notPrefs';
import getPrefs from '../middlewares/Prefs/prefs';

export default (routes) => {
  routes.post('/profile/prefs', auth,
    getUser,
    notPrefs,
    getSchool,
    getCourses,
    PrefsController.store);


  routes.get('/users/prefs', auth,
    getUser,
    getPrefs,
    PrefsController.show);

  routes.delete('/users/prefs', auth,
    getUser,
    getPrefs,
    PrefsController.destroy);

  routes.put('/users/prefs', auth,
    getUser,
    getPrefs,
    getSchool,
    getCourses,
    PrefsController.update);
};
