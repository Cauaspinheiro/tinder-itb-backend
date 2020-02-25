export default (req, res, next) => {
  const { deslikes } = req.user;
  const { _id: id } = req.targetUser;

  if (!deslikes.includes(id)) return res.status(404).json({ error: 'USER NOT FOUND IN DISLIKES' });

  return next();
};
