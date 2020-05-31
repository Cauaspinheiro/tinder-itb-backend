import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { images } = req.user;

  if (images.length < 2) {
    return errorHandler(res, 400, {
      error: {
        pt_br: 'VOCÊ PRECISA DE PELO MENOS 1 IMAGEM NO SEU PERFIL',
        en_us: 'YOU NEED AT LEAST 1 IMAGE IN YOUR PROFILE',
      },
      details: {
        pt_br: 'Você precisa de pelo menos 1 imagem no seu perfil para nós podermos mostrar ela aos outros usuários',
        en_us: 'You need at least 1 image on your profile so that we can show it to other users',
      },
    });
  }

  return next();
};
