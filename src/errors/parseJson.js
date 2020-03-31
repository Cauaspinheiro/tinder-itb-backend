export default (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({ error: 'JSON NOT VALID', details: err.message });
  }

  return next();
};
