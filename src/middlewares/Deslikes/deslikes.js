export default (req, res, next) => {
  const { deslikes } = req.headerUser;
  const { _id: id } = req.paramUser;

  if (!deslikes.includes(id)) return res.json('Usuário não encontrado em deslikes');

  return next();
};
