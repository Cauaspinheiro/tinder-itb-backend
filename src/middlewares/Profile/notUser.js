import errorHandler from '../../errors/errorsByStatus/400';
import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return errorHandler(res, {
      error: {
        pt_br: 'USUÁRIO JÁ EXISTE',
      },
      details: {
        pt_br: `Já existe um usuário com o e-mail ${email}`,
      },
    });
  }

  return next();
};
