import fs from 'fs';
import path from 'path';

export default (req, res, next) => {
  const { filename } = req.file;

  if (!filename) return res.status(404).json({ error: 'FILE NOT FOUND' });

  fs.unlink(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', filename),
    (err) => {
      if (err) { return res.status(500).json({ error: 'SOMETHING GOES WRONG' }); }
      return true;
    });

  return next();
};
