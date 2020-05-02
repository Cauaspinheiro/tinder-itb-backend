import errorHandler from '../../errors/errorsByStatus/400';

export default (req, res, next) => {
  const { images } = req.user;

  if (images.length > 4) {
    return errorHandler(res, {
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
