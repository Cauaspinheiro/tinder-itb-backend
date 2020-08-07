import documentation from '../constants/documentation';

export default (err, req, res, next) => {
  if (!err.kind) return next(err);

  if (err.kind.toUpperCase() === 'OBJECTID') {
    return res.status(400).json({
      status: '400 Bad Request',
      error: {
        en_us: 'INVALID ID',
        pt_br: 'ID INVÁLIDO',
      },
      details: {
        en_us: `Invalid ${err.value} id for search data in database, because it`
        + ' dont follow the required specifications. '
        + 'For more info go to '
        + 'https://docs.mongodb.com/manual/reference/bson-types/#objectid',
        pt_br: `Não é possível usar o id ${err.value} para buscar dados no `
        + 'banco de dados, pois ele não segue as especificações necessárias. '
        + 'Para mais informações acesse '
        + 'https://docs.mongodb.com/manual/reference/bson-types/#objectid '
        + '(página em inglês)',
      },
      type: err.name,
      more_info: {
        model: err.model.modelName,
        id: err.value,
      },
      documentation_link: documentation,
    });
  }

  return next(err);
};
