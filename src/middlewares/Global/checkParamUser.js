
import User from '../../models/User';

async function checkParamUser(req, res, next) {
  const { id: _id } = req.params;

  const user = await User.findOne({ _id });

  if (!user) return res.json('Param User not found');

  req.paramUser = user;

  return next();
}

export default checkParamUser;
