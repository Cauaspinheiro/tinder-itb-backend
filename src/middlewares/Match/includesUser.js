export default (req, res, next) => {
  const { paramUser: targetUser, headerUser: user } = req;

  if (!user.matchs.includes(targetUser.id)) return res.json('Usuário não encontrado em matchs');

  return next();
};
