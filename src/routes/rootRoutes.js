import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.redirect('https://github.com/Cauaspinheiro/tinder-itb-backend'));

export default routes;
