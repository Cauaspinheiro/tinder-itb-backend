import LikeController from '../controllers/LikeController';

import headerUser from '../middlewares/Global/headerUser';
import paramUser from '../middlewares/Global/paramUser';

export default (routes) => {
  routes.get('/users/:id/likes',
    paramUser,
    LikeController.index);

  routes.post('/users/:id/likes',
    paramUser,
    headerUser,
    LikeController.store);

  routes.put('/users/:id/likes',
    paramUser,
    headerUser,
    LikeController.update);

  routes.delete('/users/:id/likes',
    paramUser,
    LikeController.destroy);
};
