import User from '../models/User';

export default {
  async index(req, res) {
    const { prefs } = req;

    const users = await User.find(prefs, {
      _id: 0,
      nome: 1,
      genero: 1,
      data_nascimento: 1,
      bio: 1,
      ano: 1,
      curso: 1,
      periodo: 1,
      escola: 1,
    });

    return res.status(200).json(users);
  },

  async show(req, res) {
    return res.status(200).json(req.user);
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.status(201).json(user);
  },

  async update(req, res) {
    const { _id } = req.user;

    const user = await User.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });

    return res.status(200).json({
      'Old User': req.user.toJSON(),
      'New User': user.toJSON(),
    });
  },

  async destroy(req, res) {
    const { _id } = req.user;

    await User.findOneAndRemove({ _id });

    return res.status(200).json(req.user);
  },
};
