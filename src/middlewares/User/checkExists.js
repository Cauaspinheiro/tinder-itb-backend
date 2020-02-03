import User from '../../models/User';

async function checkExists(req, res, next) {
  let { id: _id } = req.params;

  let user = await User.findOne({ _id });

  if (user) {
    req.user = user;
    return next();
  }

  _id = req.headers.id;

  user = await User.findOne({ _id });

  if (!user) return res.json('User not found');

  req.user = user;

  return next();
}

export default checkExists;
