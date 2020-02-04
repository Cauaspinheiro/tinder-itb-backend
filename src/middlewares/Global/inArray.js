export default (req, res, next) => {
  const { deslikes, likes, matchs } = req.headerUser;
  const { _id: id } = req.paramUser;

  if (deslikes.includes(id) || likes.includes(id) || matchs.includes(id)) {
    return res.json('User já está em uma lista');
  }

  return next();
};
