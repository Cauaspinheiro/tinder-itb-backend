export default (req, res, next) => {
  const { password } = req.body;

  if (!password) return next();

  if (password.length < 6) return res.status(400).json({ error: 'INVALID PASSWORD' });

  return next();
};
