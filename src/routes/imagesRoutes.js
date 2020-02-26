import multer from 'multer';

import ImageController from '../controllers/ImageController';

import auth from '../middlewares/Global/auth';
import getUser from '../middlewares/Global/user';
import file from '../middlewares/Images/file';
import linkUser from '../middlewares/Images/linkUser';
import max from '../middlewares/Images/max';
import min from '../middlewares/Images/min';
import store from '../middlewares/Images/store';
import userRemove from '../middlewares/Images/user';

import multerConfig from '../config/multer';


export default (routes) => {
  routes.post('/uploads', auth,
    getUser,
    max,
    multer(multerConfig).single('file'),
    file,
    store,
    linkUser,
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
    userRemove,
    ImageController.delete);

  routes.put('/uploads/:index', auth,
    getUser,
    ImageController.update);
};
