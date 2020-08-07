import { Router } from 'express';

import MatchController from '../controllers/MatchController';

import auth from '../middlewares/Global/auth';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import findUsers from '../middlewares/Match/findUsers';
import includesUser from '../middlewares/Match/includesUser';


const routes = Router();

routes.get('/profile/matchs', auth,
  user,
  findUsers,
  MatchController.index);

routes.put('/profile/matchs/:id', auth,
  user,
  targetUser,
  includesUser,
  MatchController.update);

export default routes;
