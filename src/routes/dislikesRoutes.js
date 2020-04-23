import { Router } from 'express';

import DislikeController from '../controllers/DislikeController';

import auth from '../middlewares/Global/auth';
import inArrays from '../middlewares/Global/inArray';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';


const routes = Router();

routes.get('/profile/deslikes', auth,
  user,
  DislikeController.index);

routes.post('/profile/deslikes/:id', auth,
  user,
  targetUser,
  inArrays,
  DislikeController.store);

routes.delete('/profile/deslikes', auth,
  user,
  DislikeController.destroy);

export default routes;
