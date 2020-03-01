import multer from 'multer';

import ImageController from '../controllers/ImageController';

import auth from '../middlewares/Global/auth';
import getUser from '../middlewares/Global/user';
import destroy from '../middlewares/Images/delete';
import file from '../middlewares/Images/file';
import linkUser from '../middlewares/Images/linkUser';
import max from '../middlewares/Images/max';
import min from '../middlewares/Images/min';
import store from '../middlewares/Images/store';
import tmp from '../middlewares/Images/tmp';

import multerConfig from '../config/multer';


export default (routes) => {
  routes.post('/uploads', auth,
    getUser,
    max,
    multer(multerConfig).single('file'),
    file,
    store,
    linkUser,
    tmp,
    ImageController.store);

  routes.get('/uploads', auth,
    getUser,
    ImageController.index);

  routes.get('/uploads/:index', auth,
    getUser,
    ImageController.show);

  routes.delete('/uploads/:index', auth,
    getUser,
    min,
    destroy,
    ImageController.delete);

  routes.put('/uploads/:index', auth,
    getUser,
    ImageController.update);
};
