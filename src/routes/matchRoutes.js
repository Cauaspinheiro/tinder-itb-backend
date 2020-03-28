import { Router } from 'express';

import MatchController from '../controllers/MatchController';

import auth from '../middlewares/Global/auth';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import findUsers from '../middlewares/Match/findUsers';
import includesUser from '../middlewares/Match/includesUser';

import errorId from '../errors/id';

const routes = Router();

routes.get('/profile/matchs', auth,
  user,
  findUsers,
  MatchController.index);

routes.put('/profile/matchs', auth,
  user,
  targetUser,
  includesUser,
  MatchController.update);

routes.use(errorId);

export default routes;
