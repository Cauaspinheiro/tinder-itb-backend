import SchoolController from '../controllers/SchoolController';

function loadSchoolRoutes(routes) {
  routes.get('/schools', SchoolController.index);
  routes.get('/schools/:id', SchoolController.show);
  routes.post('/schools', SchoolController.store);
  routes.put('/schools/:id', SchoolController.update);
  routes.delete('/schools/:id', SchoolController.destroy);
}

export default loadSchoolRoutes;