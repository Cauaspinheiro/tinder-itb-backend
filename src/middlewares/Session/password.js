import bcrypt from 'bcryptjs';

import errorHandler from '../../errors/errorsByStatus/400';

export default async (req, res, next) => {
  const { password } = req.body;
  const { password_hash } = req.user;


  if (!(await bcrypt.compare(password, password_hash))) {
    return errorHandler(res, {
      error: {
        en_us: 'INCORRECT PASSWORD',
        pt_br: 'SENHA INCORRETA',
      },
      details: {
        en_us: 'Incorrect password, check your password and try again.',
        pt_br: 'Senha incorreta, verifique sua senha e tente novamente.',
      },
    });
  }

  return next();
};
