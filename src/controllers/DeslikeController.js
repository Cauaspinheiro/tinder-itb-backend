import User from '../models/User';

export default {
  async index(req, res) {
    const { user } = req;

    return res.status(200).json(user.deslikes);
  },

  async store(req, res) {
    const { targetUser, user } = req;

    user.deslikes.push(targetUser.id);

    await user.save();

    return res.status(201).json(user.deslikes);
  },

  async update(req, res) {
    const { targetUser, user } = req;

    for (let i = 0; i < user.deslikes.length; i += 1) {
      if (user.deslikes[i] == targetUser.id) { //eslint-disable-line
        user.deslikes.splice(i, 1);
      }
    }

    await user.save();

    return res.status(200).json(user.deslikes);
  },

  async destroy(req, res) {
    const { _id, deslikes } = req.user;

    await User.findOneAndUpdate({ _id }, {
      $unset: {
        deslikes,
      },
    }, { new: true });

    return res.status(204).end();
  },
};
