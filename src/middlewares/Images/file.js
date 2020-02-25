export default (req, res, next) => {
  const { file } = req;

  if (!file) return res.status(400).json({ error: 'FILE NOT FOUND' });

  return next();
};
