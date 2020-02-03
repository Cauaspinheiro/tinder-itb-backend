import User from '../../models/User';

async function checkHeaderUser(req, res, next) {
  const { id: _id } = req.headers;

  const user = await User.findOne({ _id });

  if (!user) return res.json('User not found');

  req.headerUser = user;

  return next();
}


export default checkHeaderUser;
