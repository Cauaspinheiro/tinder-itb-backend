export default (req, res, next) => {
  const { likes } = req.user;
  const { _id: id } = req.targetUser;

  if (!likes.includes(id)) return res.status(404).json('Usuário não encontrado em likes');

  return next();
};
