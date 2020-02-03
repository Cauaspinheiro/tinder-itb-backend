async function checkPrefs(req, res, next) {
  const { user } = req;

  if (!user.prefs) return next();

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
