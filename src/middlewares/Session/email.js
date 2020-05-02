import errorHandler from '../../errors/errorByStatus';
import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return errorHandler(res, 404, {
      error: {
        en_us: 'USER NOT FOUND',
        pt_br: 'USUÁRIO NÃO ENCONTRADO',
      },
      details: {
        en_us: 'We dont find anyone with that email',
        pt_br: 'Não existe nenhum usuário com esse email',
      },
      more_info: {
        email,
      },
    });
  }

  req.user = user;

  return next();
};
