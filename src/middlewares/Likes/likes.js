export default (req, res, next) => {
  const { likes } = req.headerUser;
  const { _id: id } = req.paramUser;

  if (!likes.includes(id)) return res.json('Usuário não encontrado em likes');

  return next();
};
