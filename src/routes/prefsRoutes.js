import PrefsController from '../controllers/PrefsController';

import getSchool from '../middlewares/Global/school';
import getUser from '../middlewares/Global/user';
import getCourses from '../middlewares/Prefs/courses';
import notPrefs from '../middlewares/Prefs/notPrefs';
import getPrefs from '../middlewares/Prefs/prefs';

export default (routes) => {
  routes.post('/users/:id/prefs',
    getUser,
    notPrefs,
    getSchool,
    getCourses,
    PrefsController.store);


  routes.get('/users/:id/prefs',
    getUser,
    getPrefs,
    PrefsController.show);

  routes.delete('/users/:id/prefs',
    getUser,
    getPrefs,
    PrefsController.destroy);

  routes.put('/users/:id/prefs',
    getUser,
    getPrefs,
    getSchool,
    getCourses,
    PrefsController.update);
};
