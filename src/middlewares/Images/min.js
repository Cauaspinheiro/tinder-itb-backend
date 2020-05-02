import errorHandler from '../../errors/errorsByStatus/400';

export default (req, res, next) => {
  const { images } = req.user;

  if (images.length < 2) {
    return errorHandler(res, {
      error: {
        pt_br: 'VOCÊ PRECISA DE PELO MENOS 1 IMAGEM NO SEU PERFIL',
      },
      details: {
        pt_br: 'Você precisa de pelo menos 1 imagem no seu perfil para nós podermos mostrar ela aos outros usuários',
      },
    });
  }

  return next();
};
