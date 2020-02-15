export default (req, res, next) => {
  const { deslikes, likes, matchs } = req.user;
  const { _id: id } = req.targetUser;

  if (deslikes.includes(id) || likes.includes(id) || matchs.includes(id)) {
    return res.status(400).json({ error: 'USER IS ALREADY IN A LIST' });
  }

  return next();
};
