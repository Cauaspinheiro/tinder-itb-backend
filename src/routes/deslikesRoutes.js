import DeslikeController from '../controllers/DeslikeController';

import headerUser from '../middlewares/Global/headerUser';
import paramUser from '../middlewares/Global/paramUser';

export default (routes) => {
  routes.get('/users/:id/deslikes',
    paramUser,
    DeslikeController.index);

  routes.post('/users/:id/deslikes',
    paramUser,
    headerUser,
    DeslikeController.store);

  routes.put('/users/:id/deslikes',
    paramUser,
    headerUser,
    DeslikeController.update);

  routes.delete('/users/:id/deslikes',
    paramUser,
    DeslikeController.destroy);
};
