import SessionController from '../controllers/SessionController';

import email from '../middlewares/Session/email';
import password from '../middlewares/Session/password';

export default (routes) => {
  routes.post('/sessions', email, password, SessionController.store);
};
