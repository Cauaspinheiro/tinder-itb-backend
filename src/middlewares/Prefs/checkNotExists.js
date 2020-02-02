async function checkNotExists(req, res, next) {
  const { prefs } = req.user;

  if (prefs) return res.json('Prefs já existem');

  req.prefs = req.body;

  return next();
}

export default checkNotExists;
