import bcrypt from 'bcryptjs';

export default async (req, res, next) => {
  let { password } = req.user;

  if (!password) return next();

  password = await bcrypt.hash(password, 6);

  req.user.password_hash = password;

  return next();
};
