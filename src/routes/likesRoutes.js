import LikeController from '../controllers/LikeController';

import auth from '../middlewares/Global/auth';
import inArray from '../middlewares/Global/inArray';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import inLikes from '../middlewares/Likes/likes';
import matches from '../middlewares/Likes/match';

export default (routes) => {
  routes.get('/users/likes', auth,
    user,
    LikeController.index);

  routes.post('/users/likes/:id', auth,
    user,
    targetUser,
    inArray,
    matches,
    LikeController.store);

  routes.put('/users/likes/:id', auth,
    user,
    targetUser,
    inLikes,
    LikeController.update);

  routes.delete('/users/likes', auth,
    user,
    LikeController.destroy);
};
