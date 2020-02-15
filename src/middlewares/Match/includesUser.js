export default (req, res, next) => {
  const { targetUser, user } = req;

  if (!user.matchs.includes(targetUser.id)) {
    return res.status(404).json({ error: 'USER NOT FOUND IN MATCHS' });
  }

  return next();
};
