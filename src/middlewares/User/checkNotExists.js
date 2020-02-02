import User from '../../models/User';

async function checkNotExists(req, res, next) {
  const { email_itb } = req.body;

  const user = await User.findOne({ email_itb });

  if (user) return res.json('Usuário já existe');

  return next();
}

export default checkNotExists;