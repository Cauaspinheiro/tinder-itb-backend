async function checkPrefs(req, res, next) {
  const { user } = req;

  if (!user.prefs) return next();

  if (user.prefs.course) req.prefs.course = { $in: user.prefs.course };
  if (user.prefs.grade) req.prefs.grade = { $in: user.prefs.grade };
  if (user.prefs.gender) req.prefs.gender = { $in: user.prefs.gender };
  if (user.prefs.school) req.prefs.school = { $in: user.prefs.school };

  return next();
}

export default checkPrefs;
