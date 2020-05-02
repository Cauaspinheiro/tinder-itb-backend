import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { file } = req;

  if (!file) {
    return errorHandler(res, 400, {
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
