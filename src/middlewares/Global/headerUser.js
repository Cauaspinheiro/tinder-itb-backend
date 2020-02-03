import User from '../../models/User';

export default async (req, res, next) => {
  const { id: _id } = req.headers;

  const user = await User.findOne({ _id });

  if (!user) return res.json('Header User not found');

  req.headerUser = user;

  return next();
};
