import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { images } = req.user;

  if (images.length > 4) {
    return errorHandler(res, 400, {
      error: {
        pt_br: 'LIMITE DE IMAGENS EXCEDIDO',
        en_us: 'IMAGE LIMIT EXCEEDED',
      },
      details: {
        pt_br: 'Você não pode ter mais de 5 imagens no mesmo perfil',
        en_us: 'You cannot have more than 5 images in the same profile',
      },
    });
  }

  return next();
};
