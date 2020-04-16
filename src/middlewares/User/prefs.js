async function checkPrefs(req, res, next) {
  const { user } = req;

  if (!user.prefs) return next();

  if (user.prefs.courses.length !== 0) {
    req.prefs.curso = { $in: user.prefs.courses };
  }
  if (user.prefs.grades.length !== 0) {
    req.prefs.ano = { $in: user.prefs.grades };
  }
  if (user.prefs.genders.length !== 0) {
    req.prefs.genero = { $in: user.prefs.genders };
  }
  if (user.prefs.school) req.prefs.school = { $in: user.prefs.school };

  return next();
}

export default checkPrefs;
