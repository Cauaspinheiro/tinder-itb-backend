import PrefsController from '../controllers/PrefsController';

import prefs from '../middlewares/Prefs';
import user from '../middlewares/User';

function loadPrefsRoutes(routes) {
  routes.post('/users/:id/prefs',
    user.checkExists,
    prefs.checkNotExists,
    prefs.checkSchool,
    prefs.checkCourses,
    PrefsController.store);


  routes.get('/users/:id/prefs',
    user.checkExists,
    prefs.checkExists,
    PrefsController.show);

  routes.delete('/users/:id/prefs',
    user.checkExists,
    prefs.checkExists,
    PrefsController.destroy);

  routes.put('/users/:id/prefs',
    user.checkExists,
    prefs.checkExists,
    prefs.checkSchool,
    prefs.checkCourses,
    PrefsController.update);
}


export default loadPrefsRoutes;
