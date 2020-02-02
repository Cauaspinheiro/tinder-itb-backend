import User from '../../models/User';

async function checkPrefs(req, res, next) {
  const { _id } = req.headers;

  const user = await User.findOne({ _id });

  if (!user) return res.json('Não foi possível achar usuário');

  req.user = user;

  if (!user.prefs) return next();

  req.prefs = user.prefs;

  return next();
}

export default checkPrefs;
