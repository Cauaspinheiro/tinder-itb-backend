export default (req, res, next) => {
  const { deslikes } = req.user;
  const { _id: id } = req.targetUser;

  if (!deslikes.includes(id)) return res.json('Usuário não encontrado em deslikes');

  return next();
};
