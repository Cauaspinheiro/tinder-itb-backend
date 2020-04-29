export default (err, req, res, next) => {
  if (err.joi) {
    return res.status(400).json(err.joi.details[0].message);
  }
  return next(err);
};
