import MatchController from '../controllers/MatchController';

import auth from '../middlewares/Global/auth';
import authUser from '../middlewares/Global/authUser';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import includesUser from '../middlewares/Match/includesUser';


export default (routes) => {
  routes.get('/users/:id/matchs', auth, authUser, user, MatchController.index);

  routes.put('/users/:id/matchs', auth, authUser,
    user,
    targetUser,
    includesUser,
    MatchController.update);
};
