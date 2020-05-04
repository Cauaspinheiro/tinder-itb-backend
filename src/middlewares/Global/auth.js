import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import errorHandler from '../../errors/errorByStatus';

export default async (req, res, next) => {
  const { authorization: auth } = req.headers;

  if (!auth) {
    return errorHandler(res, 401, {
      error: {
        en_us: 'AUTHENTICATION TOKEN NOT FOUND',
        pt_br: 'TOKEN DE AUTENTICAÇÃO NÃO FOI ENCONTRADO',
      },
      details: {
        en_us: 'The jwt token was not found',
        pt_br: 'O token jwt de autenticação, que serve para autenticar o usuário logado,'
        + ' não foi encontrado',
      },
    });
  }

  const token = auth.split(' ')[1];


  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.id = decoded.id;

    req.expiresIn = new Date(new Date().getTime() + decoded.exp);

    return next();
  } catch (err) {
    return errorHandler(res, 401, {
      error: {
        pt_br: 'TOKEN DE AUTENTICAÇÃO INVÁLIDO',
        en_us: 'INVALID AUTHENTICATION TOKEN',
      },
      details: {
        en_us: 'The jwt token is invalid',
        pt_br: 'O token jwt de autenticação, que serve para autenticar o usuário logado,'
        + ' não é valido, provalmente porque ele expirou, crie um novo para continuar.',
      },
    });
  }
};
