import { Router } from 'express';

import SessionController from '../controllers/SessionController';

import validate from '../middlewares/Global/auth';
import email from '../middlewares/Session/email';
import password from '../middlewares/Session/password';

const routes = Router();

routes.post('/sessions', email, password, SessionController.store);
routes.get('/sessions', validate, (req, res) => res.status(204));

export default routes;
