export default (req, res, next) => {
  const { prefs } = req.user;

  if (!prefs) return res.status(404).json({ error: 'PREFS NOT FOUND' });

  req.prefs = prefs;

  return next();
};
