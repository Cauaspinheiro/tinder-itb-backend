import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ error: 'USER NOT FOUND' });

  req.user = user;

  return next();
};
