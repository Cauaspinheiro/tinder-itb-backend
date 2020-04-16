export default (req, res, next) => {
  const { dislikes } = req.user;
  const { _id: id } = req.targetUser;

  if (!dislikes.includes(id)) return res.status(404).json({ error: 'USER NOT FOUND IN DISLIKES' });

  return next();
};
