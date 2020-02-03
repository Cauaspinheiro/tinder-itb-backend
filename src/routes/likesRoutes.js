import LikeController from '../controllers/LikeController';

import headerUser from '../middlewares/Global/headerUser';
import inArray from '../middlewares/Global/inArray';
import paramUser from '../middlewares/Global/paramUser';
import inLikes from '../middlewares/Likes/likes';

export default (routes) => {
  routes.get('/users/:id/likes',
    paramUser,
    LikeController.index);

  routes.post('/users/:id/likes',
    paramUser,
    headerUser,
    inArray,
    LikeController.store);

  routes.put('/users/:id/likes',
    paramUser,
    headerUser,
    inLikes,
    LikeController.update);

  routes.delete('/users/:id/likes',
    paramUser,
    LikeController.destroy);
};
