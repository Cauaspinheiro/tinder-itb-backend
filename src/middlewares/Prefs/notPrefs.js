export default (req, res, next) => {
  const { prefs } = req.user;

  if (prefs) return res.status(400).json({ error: 'PREFS ALREADY EXISTS' });

  return next();
};
