import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { file } = req;

  if (!file) {
    return errorHandler(res, 400, {
      error: {
        pt_br: 'IMAGEM NÃO FOI ENCONTRADA',
        en_us: 'IMAGE NOT FOUND',
      },
      details: {
        pt_br: 'Nenhuma imagem foi passada para ser salva no seu perfil',
        en_us: 'No image were provided to be saved in your profile ',
      },
    });
  }

  return next();
};
