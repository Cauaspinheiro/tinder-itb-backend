import User from "../models/User";

async function checkUserExists(req, res, next) {
  const _id = req.params.id;

  const user = await User.findOne({ _id });

  if (!user) return res.json("User not found");

  req.user = user;

  next();
}

export default checkUserExists;
