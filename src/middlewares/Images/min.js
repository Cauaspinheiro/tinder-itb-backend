export default (req, res, next) => {
  const { images } = req.user;

  if (images.length < 2) return res.status(400).json({ error: 'NEED AT LEAST ONE IMAGE' });

  return next();
};
