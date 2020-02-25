import bcrypt from 'bcryptjs';

export default async (req, res, next) => {
  const { password } = req.body;
  const { password_hash } = req.user;


  if (!(await bcrypt.compare(password, password_hash))) {
    return res.status(400).json({ error: 'INVALID PASSWORD' });
  }

  return next();
};
