import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { images } = req.user;

  if (images.length > 4) {
    return errorHandler(res, 400, {
      error: {
        pt_br: 'LIMITE DE IMAGENS EXCEDIDO',
      },
      details: {
        pt_br: 'Você não pode ter mais de 5 imagens no mesmo perfil',
      },
    });
  }

  return next();
};
