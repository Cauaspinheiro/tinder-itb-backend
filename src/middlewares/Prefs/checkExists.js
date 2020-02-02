async function checkExists(req, res, next) {
  const { prefs } = req.user;

  if (!prefs) return res.json('Prefs não encontradas');

  req.prefs = prefs;

  return next();
}

export default checkExists;
