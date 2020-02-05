import User from '../models/User';

export default {
  async show(req, res) {
    const { prefs } = req;

    if (!prefs) return res.json('Prefs não encontradas');

    return res.json(prefs);
  },

  async store(req, res) {
    const { _id } = req.user;

    const user = await User.findOneAndUpdate(
      { _id },
      { prefs: req.body },
      { new: true },
    );

    return res.json({ prefs: user.prefs });
  },

  async update(req, res) {
    const { _id } = req.user;
    const { prefs } = req;

    const user = await User.findOneAndUpdate(
      { _id },
      { prefs: req.body },
      { new: true },
    );

    return res.json({ 'Old Prefs': prefs, 'New Prefs': user.prefs });
  },

  async destroy(req, res) {
    const { _id } = req.user;
    const { prefs } = req;

    if (!prefs) return res.json('Prefs não encontradas');

    const user = await User.findOneAndUpdate({ _id }, {
      $unset: {
        prefs,
      },
    }, { new: true });

    return res.json(user);
  },
};
