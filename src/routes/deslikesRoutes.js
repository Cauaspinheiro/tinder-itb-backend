import DeslikeController from '../controllers/DeslikeController';

import inDeslikes from '../middlewares/Deslikes/deslikes';
import auth from '../middlewares/Global/auth';
import sameUser from '../middlewares/Global/authUser';
import inArrays from '../middlewares/Global/inArray';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';

export default (routes) => {
  routes.get('/users/:id/deslikes', auth, sameUser,
    user,
    DeslikeController.index);

  routes.post('/users/:id/deslikes', auth,
    user,
    targetUser,
    inArrays,
    DeslikeController.store);

  routes.put('/users/:id/deslikes', auth,
    user,
    targetUser,
    inDeslikes,
    DeslikeController.update);

  routes.delete('/users/:id/deslikes', auth,
    user,
    DeslikeController.destroy);
};
