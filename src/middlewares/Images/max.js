export default (req, res, next) => {
  const { images } = req.user;

  if (images.length > 4) return res.status(400).json({ error: 'OUT OF RANGE' });

  return next();
};
