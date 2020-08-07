import { Router } from 'express';

import SessionController from '../controllers/SessionController';

import validate from '../middlewares/Global/auth';
import user from '../middlewares/Global/user';
import email from '../middlewares/Session/email';
import password from '../middlewares/Session/password';

const routes = Router();

routes.post('/sessions', email, password, SessionController.store);
routes.get('/sessions', validate, user, (req, res) => res.status(200)
  .json({ expires_in: req.expiresIn }));

export default routes;
