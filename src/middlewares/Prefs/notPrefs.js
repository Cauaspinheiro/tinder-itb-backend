export default (req, res, next) => {
  const { prefs } = req.user;

  if (prefs) return res.status(400).json('Prefs já existem');

  return next();
};
