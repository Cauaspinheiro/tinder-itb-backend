export default (req, res, next) => {
  const { prefs } = req.user;

  if (!prefs) return res.json('Prefs não encontradas');

  req.prefs = prefs;

  return next();
};
