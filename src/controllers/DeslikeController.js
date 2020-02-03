import User from '../models/User';

export default {
  async index(req, res) {
    const { paramUser: user } = req;

    return res.json(user.deslikes);
  },

  async store(req, res) {
    const { paramUser: targetUser, headerUser: user } = req;

    user.deslikes.push(targetUser.id);

    await user.save();

    return res.json(user.deslikes);
  },

  async update(req, res) {
    const { paramUser: targetUser, headerUser: user } = req;

    for (let i = 0; i < user.deslikes.length; i += 1) {
      if (user.deslikes[i] == targetUser.id) { //eslint-disable-line
        user.deslikes.splice(i, 1);
      }
    }

    await user.save();

    return res.json(user.deslikes);
  },

  async destroy(req, res) {
    const { _id, deslikes } = req.paramUser;

    const user = await User.findOneAndUpdate({ _id }, {
      $unset: {
        deslikes,
      },
    }, { new: true });

    return res.json(user);
  },
};
