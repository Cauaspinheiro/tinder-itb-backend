import User from '../../models/User';

export default async (req, res, next) => {
  const { matchs } = req.user;

  const users = await User.find({ _id: { $in: matchs } }, { name: 1, contacts: 1, images: 1 });

  req.users = users;

  next();
};
