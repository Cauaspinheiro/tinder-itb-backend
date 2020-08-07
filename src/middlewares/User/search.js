export default (req, res, next) => {
  const { user } = req;
  const { _id: id } = user;

  req.prefs = {};

  req.prefs.$and = [
    { _id: { $ne: id } },
    { _id: { $nin: user.likes } },
    { _id: { $nin: user.dislikes } },
    { _id: { $nin: user.matchs } },
  ];

  req.prefs.show_me = true;

  return next();
};
