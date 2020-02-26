import MatchController from '../controllers/MatchController';

import auth from '../middlewares/Global/auth';
import targetUser from '../middlewares/Global/targetUser';
import user from '../middlewares/Global/user';
import findUsers from '../middlewares/Match/findUsers';
import includesUser from '../middlewares/Match/includesUser';


export default (routes) => {
  routes.get('/profile/matchs', auth,
    user,
    findUsers,
    MatchController.index);

  routes.put('/profile/matchs', auth,
    user,
    targetUser,
    includesUser,
    MatchController.update);
};
