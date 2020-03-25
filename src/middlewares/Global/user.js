import User from '../../models/User';

export default async (req, res, next) => {
  const { id: _id } = req;

  let user;

  try {
    user = await User.findOne({ _id });
  } catch (error) {
    return res.status(400).json({ error: 'INCORRECT ID' });
  }

  if (!user) return res.status(404).json({ error: 'USER NOT FOUND' });

  req.user = user;

  return next();
};
