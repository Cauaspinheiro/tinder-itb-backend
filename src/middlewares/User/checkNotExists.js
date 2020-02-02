import User from '../../models/User';

async function checkNotExists(req, res, next) {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) return res.json('Usuário já existe');

  req.user = req.body;

  return next();
}

export default checkNotExists;
