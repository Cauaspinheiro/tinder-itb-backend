import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import errorHandler from '../../errors/errorByStatus';

export default async (req, res, next) => {
  const { authorization: auth } = req.headers;

  if (!auth) {
    return errorHandler(res, 401, {
      error: {
        pt_br: 'TOKEN DE AUTENTICAÇÃO NÃO FOI ENCONTRADO',
      },
      details: {
        pt_br: 'O token jwt de autenticação, que serve para autenticar o usuário logado,'
        + ' não foi encontrado',
      },
    });
  }

  const token = auth.split(' ')[1];


  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.id = decoded.id;

    return next();
  } catch (err) {
    return errorHandler(res, 401, {
      error: {
        pt_br: 'TOKEN DE AUTENTICAÇÃO INVÁLIDO',
      },
      details: {
        pt_br: 'O token jwt de autenticação, que serve para autenticar o usuário logado,'
        + ' não é valido, provalmente porque ele expirou, crie um novo para continuar.',
      },
    });
  }
};
