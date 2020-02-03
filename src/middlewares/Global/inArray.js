export default (req, res, next) => {
  const { deslikes, likes } = req.headerUser;
  const { _id: id } = req.paramUser;

  if (deslikes.includes(id) || likes.includes(id)) {
    return res.json('User já existe');
  }

  return next();
};
