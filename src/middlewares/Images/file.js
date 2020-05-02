import errorHandler from '../../errors/errorsByStatus/400';

export default (req, res, next) => {
  const { file } = req;

  if (!file) {
    return errorHandler(res, {
      error: {
        pt_br: 'IMAGEM NÃO FOI ENCONTRADA',
      },
      details: {
        pt_br: 'Nenhuma imagem foi passada para ser salva no seu perfil',
      },
    });
  }

  return next();
};
