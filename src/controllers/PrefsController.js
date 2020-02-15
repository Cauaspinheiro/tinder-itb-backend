import User from '../models/User';

export default {
  async show(req, res) {
    const { prefs } = req;

    return res.status(200).json(prefs);
  },

  async store(req, res) {
    const { _id } = req.user;

    const { prefs } = await User.findOneAndUpdate(
      { _id },
      { prefs: req.body },
      { new: true },
    );

    return res.status(201).json({ prefs });
  },

  async update(req, res) {
    const { _id } = req.user;

    const { prefs } = await User.findOneAndUpdate(
      { _id },
      { prefs: req.body },
      { new: true },
    );

    return res.status(200).json({ prefs });
  },

  async destroy(req, res) {
    const { _id } = req.user;
    const { prefs } = req;

    await User.findOneAndUpdate({ _id }, {
      $unset: {
        prefs,
      },
    }, { new: true });

    return res.status(204).json();
  },
};
