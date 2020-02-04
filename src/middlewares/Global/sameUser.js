export default (req, res, next) => {
  const { id: authId } = req;
  const { id: paramId } = req.params;

  if (authId === paramId) return next();

  return res.json('Não autorizado');
};
