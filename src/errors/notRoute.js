export default (req, res, next) => res.status(404).json({
  error: `CANNOT ${req.method} in ${req.url}.`,
});
