import bcrypt from 'bcryptjs';

export default async (req, res, next) => {
  let { password } = req.body;

  if (!password) return next();

  password = await bcrypt.hash(password, 6);

  req.body.password_hash = password;

  return next();
};
