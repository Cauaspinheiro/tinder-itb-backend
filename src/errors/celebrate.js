export default (err, req, res, next) => {
  if (err.joi) {
    const { details } = err.joi;

    const errors = details[0].message.toUpperCase().replace('"', '').replace('"', '');

    return res.status(400).json({
      error: errors,
      details,
    });
  }
  return next(err);
};
