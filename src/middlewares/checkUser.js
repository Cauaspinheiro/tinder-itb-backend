async function checkUserExists(req, res, next) {
  const _id = req.params.id;

  const user = await User.findOne({ _id });

  if (!user) return res.json("User not found");

  next();
}

async function checkUserNotExists(req, res, next) {
  const { email_itb } = req.body;

  const user = await User.findOne({ email_itb });

  if (user) return res.json("Usuário já existe");

  next();
}

export default {
  checkUserExists,
  checkUserNotExists
};
