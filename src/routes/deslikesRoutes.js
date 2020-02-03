import DeslikeController from '../controllers/DeslikeController';

import deslikes from '../middlewares/Deslikes';

function loadDeslikesRoutes(routes) {
  routes.get('/users/:id/deslikes',
    deslikes.checkParamUser,
    DeslikeController.index);

  routes.post('/users/:id/deslikes',
    deslikes.checkParamUser,
    deslikes.checkHeaderUser,
    DeslikeController.store);

  routes.put('/users/:id/deslikes',
    deslikes.checkParamUser,
    deslikes.checkHeaderUser,
    DeslikeController.update);

  routes.delete('/users/:id/deslikes',
    deslikes.checkParamUser,
    DeslikeController.destroy);
}

export default loadDeslikesRoutes;
