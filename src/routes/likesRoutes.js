import LikeController from '../controllers/LikeController';

import likes from '../middlewares/Likes';

function loadLikesRoutes(routes) {
  routes.get('/users/:id/likes',
    likes.checkParamUser,
    LikeController.index);

  routes.post('/users/:id/likes',
    likes.checkParamUser,
    likes.checkHeaderUser,
    LikeController.store);

  routes.put('/users/:id/likes',
    likes.checkParamUser,
    likes.checkHeaderUser,
    LikeController.update);

  routes.delete('/users/:id/likes',
    likes.checkParamUser,
    LikeController.destroy);
}

export default loadLikesRoutes;
