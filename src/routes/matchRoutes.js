import MatchController from '../controllers/MatchController';

import headerUser from '../middlewares/Global/headerUser';
import paramUser from '../middlewares/Global/paramUser';
import includesUser from '../middlewares/Match/includesUser';


export default (routes) => {
  routes.get('/users/:id/matchs', paramUser, MatchController.index);

  routes.put('/users/:id/matchs',
    paramUser,
    headerUser,
    includesUser,
    MatchController.update);
};
