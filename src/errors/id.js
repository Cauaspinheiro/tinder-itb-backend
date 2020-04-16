export default (err, req, res, next) => {
  if (!err.kind) return next(err);

  if (err.kind.toUpperCase() === 'OBJECTID') {
    return res.status(400).json({ error: 'INVALID ID', id: err.value, model: err.model.modelName });
  }

  return next(err);
};
