import errorHandler from '../../errors/errorByStatus';
import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return errorHandler(res, 400, {
      error: {
        pt_br: 'USUÁRIO JÁ EXISTE',
        en_us: 'USER ALREADY EXISTS',
      },
      details: {
        pt_br: `Já existe um usuário com o e-mail ${email}`,
        en_us: `There is already a user with the email ${email}`,
      },
    });
  }

  return next();
};
