import User from "../models/User";

export default {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async show(req, res) {
    return res.json(user);
  },

  async store(req, res) {
    user = await User.create(req.body);

    return res.json(user);
  },

  async update(req, res) {
    user = await User.findOneAndUpdate({ _id }, req.body, { new: true });

    return res.json(user);
  },

  async destroy(req, res) {
    user = await User.findOneAndDelete({ _id });

    return res.json(user);
  }
};
