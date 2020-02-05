import LikeController from '../controllers/LikeController';

import auth from '../middlewares/Global/auth';
import inArray from '../middlewares/Global/inArray';
import sameUser from '../middlewares/Global/sameUser';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import inLikes from '../middlewares/Likes/likes';
import matches from '../middlewares/Likes/match';

export default (routes) => {
  routes.get('/users/:id/likes', auth, sameUser,
    user,
    LikeController.index);

  routes.post('/users/:id/likes', auth, sameUser,
    user,
    targetUser,
    inArray,
    matches,
    LikeController.store);

  routes.put('/users/:id/likes', auth,
    user,
    targetUser,
    inLikes,
    LikeController.update);

  routes.delete('/users/:id/likes', auth, sameUser,
    user,
    LikeController.destroy);
};
