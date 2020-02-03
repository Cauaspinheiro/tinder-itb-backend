async function search(req, res, next) {
  const { user } = req;
  const { _id: id } = user;

  req.prefs = {};

  req.prefs.$and = [
    { _id: { $ne: id } },
    { _id: { $nin: user.likes } },
    { _id: { $nin: user.deslikes } },
  ];

  return next();
}

export default search;
