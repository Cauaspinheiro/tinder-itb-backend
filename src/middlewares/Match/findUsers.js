import User from '../../models/User';

export default async (req, res, next) => {
  const { matchs } = req.user;

  const users = await User.find({ _id: { $in: matchs } }, { nome: 1, contatos: 1 });

  req.users = users;

  next();
};
