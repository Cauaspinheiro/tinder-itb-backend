import { Router } from 'express';

import SessionController from '../controllers/SessionController';

import email from '../middlewares/Session/email';
import password from '../middlewares/Session/password';

const routes = Router();

routes.post('/sessions', email, password, SessionController.store);

export default routes;
