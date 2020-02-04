import DeslikeController from '../controllers/DeslikeController';

import inDeslikes from '../middlewares/Deslikes/deslikes';
import auth from '../middlewares/Global/auth';
import headerUser from '../middlewares/Global/headerUser';
import inArrays from '../middlewares/Global/inArray';
import paramUser from '../middlewares/Global/paramUser';

export default (routes) => {
  routes.get('/users/:id/deslikes', auth,
    paramUser,
    DeslikeController.index);

  routes.post('/users/:id/deslikes', auth,
    paramUser,
    headerUser,
    inArrays,
    DeslikeController.store);

  routes.put('/users/:id/deslikes', auth,
    paramUser,
    headerUser,
    inDeslikes,
    DeslikeController.update);

  routes.delete('/users/:id/deslikes', auth,
    paramUser,
    DeslikeController.destroy);
};
