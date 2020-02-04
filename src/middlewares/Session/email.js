import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json('Usuário não encontrado');

  req.user = user;

  return next();
};
