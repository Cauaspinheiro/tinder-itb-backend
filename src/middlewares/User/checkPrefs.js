import User from '../../models/User';

async function checkPrefs(req, res, next) {
  const { _id } = req.headers;

  const user = await User.findOne({ _id });

  if (!user) return res.json('Não foi possível achar usuário');

  req.user = user;

  if (!user.prefs) return next();

  req.prefs = {};

  req.prefs._id = { $nin: user._id }; //eslint-disable-line

  if (user.prefs.cursos.length !== 0) {
    req.prefs.curso = { $in: user.prefs.cursos };
  }
  if (user.prefs.anos.length !== 0) {
    req.prefs.ano = { $in: user.prefs.anos };
  }
  if (user.prefs.generos.length !== 0) {
    req.prefs.genero = { $in: user.prefs.generos };
  }
  if (user.prefs.escola) req.prefs.escola = { $in: user.prefs.escola };

  return next();
}

export default checkPrefs;
