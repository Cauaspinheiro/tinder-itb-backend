export default (req, res, next) => {
  const { prefs } = req.user;

  if (prefs) return res.json('Prefs já existem');

  return next();
};
