export default (err, req, res, next) => {
  if (err.kind.toUpperCase() === 'OBJECTID') {
    return res.status(400).json({ error: 'INVALID ID', id: err.value });
  }

  return next();
};
