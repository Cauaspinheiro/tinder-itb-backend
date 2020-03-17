import { Router } from 'express';

import LikeController from '../controllers/LikeController';

import auth from '../middlewares/Global/auth';
import inArray from '../middlewares/Global/inArray';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import inLikes from '../middlewares/Likes/likes';
import matches from '../middlewares/Likes/match';

const routes = Router();

routes.get('/profile/likes', auth,
  user,
  LikeController.index);

routes.post('/profile/likes/:id', auth,
  user,
  targetUser,
  inArray,
  matches,
  LikeController.store);

routes.put('/profile/likes/:id', auth,
  user,
  targetUser,
  inLikes,
  LikeController.update);

routes.delete('/profile/likes', auth,
  user,
  LikeController.destroy);

export default routes;
