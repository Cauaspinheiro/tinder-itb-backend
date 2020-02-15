import User from '../../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ error: 'USER ALREADY EXISTS' });

  return next();
};
