export default (req, res, next) => {
  const { likes } = req.user;
  const { _id: id } = req.targetUser;

  if (!likes.includes(id)) return res.json('Usuário não encontrado em likes');

  return next();
};
