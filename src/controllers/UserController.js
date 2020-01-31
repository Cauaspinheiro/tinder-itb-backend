import User from '../models/User';

export default {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async show(req, res) {
    return res.json(req.user);
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  },

  async update(req, res) {
    const { _id } = req.user;

    const user = await User.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });

    return res.json({
      'Old User': req.user.toJSON(),
      'New User': user.toJSON(),
    });
  },

  async destroy(req, res) {
    const { _id } = req.user;

    await User.findOneAndRemove({ _id });

    return res.json(req.user);
  },
};
