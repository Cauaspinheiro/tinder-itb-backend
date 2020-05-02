import fs from 'fs';
import path from 'path';

import errorByStatus from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { filename } = req.file;

  if (!filename) {
    errorByStatus(res, 404, {
      error: {
        pt_br: 'ARQUIVO NÃO ENCONTRADO',
        en_us: 'FILE NOT FOUND',
      },
      details: {
        pt_br: 'Nenhum arquivo foi encontrado, verifique se você está enviando o arquivo de forma correta.',
        en_us: 'File not found, please check if you are sending the file.',
      },
    });
  }

  fs.unlink(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', filename),
    (err) => {
      if (err) { return res.status(500).json({ error: 'SOMETHING WENT WRONG' }); }
      return true;
    });

  return next();
};
