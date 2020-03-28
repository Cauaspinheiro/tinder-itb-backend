import { Router } from 'express';

import DeslikeController from '../controllers/DeslikeController';

import inDeslikes from '../middlewares/Deslikes/deslikes';
import auth from '../middlewares/Global/auth';
import inArrays from '../middlewares/Global/inArray';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';

import errorId from '../errors/id';

const routes = Router();

routes.get('/profile/deslikes', auth,
  user,
  DeslikeController.index);

routes.post('/profile/deslikes/:id', auth,
  user,
  targetUser,
  inArrays,
  DeslikeController.store);

routes.put('/profile/deslikes/:id', auth,
  user,
  targetUser,
  inDeslikes,
  DeslikeController.update);

routes.delete('/profile/deslikes', auth,
  user,
  DeslikeController.destroy);

routes.use(errorId);

export default routes;
