import User from '../../models/User';

export default async (req, res, next) => {
  const { id: _id } = req;

  const user = await User.findOne({ _id });

  if (!user) return res.json('User not Found');

  req.user = user;

  return next();
};
