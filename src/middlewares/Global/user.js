import errorByStatus from '../../errors/errorByStatus';
import User from '../../models/User';

export default async (req, res, next) => {
  const { id: _id } = req;

  const user = await User.findOne({ _id });

  if (!user) {
    return errorByStatus(res, 404, {
      error: {
        pt_br: 'USUÁRIO NÃO ENCONTRADO',
        en_us: 'USER NOT FOUND',
      },
      details: {
        pt_br: `Nenhum usuário com o id ${_id} foi encontrado.`,
        en_us: `We dont have a user with the ${_id} id`,
      },
      more_info: {
        id: _id,
      },
    });
  }

  req.user = user;

  return next();
};
