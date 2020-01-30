import User from "../models/User";

export default {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async show(req, res) {
    const _id = req.params.id;

    const user = await User.findOne({ _id });

    if (!user) return res.json("User not found");

    return res.json(user);
  },

  async store(req, res) {
    const { email_itb } = req.body;

    let user = await User.findOne({ email_itb });

    if (user) return res.json("Usuário já existe");

    user = await User.create(req.body);

    return res.json(user);
  },

  async update(req, res) {
    const _id = req.params.id;

    let user = await User.findOne({ _id });

    if (!user) return res.json("User not found");

    user = await User.findOneAndUpdate({ _id }, req.body, { new: true });

    return res.json(user);
  },

  async destroy(req, res) {
    const _id = req.params.id;

    let user = await User.findOne({ _id });

    if (!user) return res.json("User not found");

    user = await User.findOneAndDelete({ _id });

    return res.json(user);
  }
};
