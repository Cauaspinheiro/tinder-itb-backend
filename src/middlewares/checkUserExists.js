import User from '../models/User';

async function checkUserExists(req, res, next) {
  const { id: _id } = req.params;

  const user = await User.findOne({ _id });

  if (!user) return res.json('User not found');

  req.user = user;

  return next();
}

export default checkUserExists;
