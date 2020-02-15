import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
  const { authorization: auth } = req.headers;

  if (!auth) return res.status(401).json({ error: 'TOKEN NOT FOUND' });

  const token = auth.split(' ')[1];


  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.id = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'TOKEN NOT VALID' });
  }
};
