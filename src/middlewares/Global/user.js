import User from '../../models/User';

export default async (req, res, next) => {
  const { id: _id } = req.params;

  const user = await User.findOne({ _id });

  if (!user) return res.status(404).json('Param User not found');

  req.user = user;

  return next();
};
