import fs from 'fs';
import path from 'path';

export default (req, res, next) => {
  const { filename } = req.file;

  fs.unlink(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', filename),
    (err) => {
      if (err) { return res.status(500).json({ error: 'SOMETHING WENT WRONG' }); }
      return true;
    });

  return next();
};
