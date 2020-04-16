import User from '../models/User';

export default {
  async index(req, res) {
    const { user } = req;

    return res.status(200).json(user.dislikes);
  },

  async store(req, res) {
    const { targetUser, user } = req;

    user.dislikes.push(targetUser.id);

    await user.save();

    return res.status(201).json(user.dislikes);
  },

  async update(req, res) {
    const { targetUser, user } = req;

    for (let i = 0; i < user.dislikes.length; i += 1) {
      if (user.dislikes[i] == targetUser.id) { //eslint-disable-line
        user.dislikes.splice(i, 1);
      }
    }

    await user.save();

    return res.status(200).json(user.dislikes);
  },

  async destroy(req, res) {
    const { _id, dislikes } = req.user;

    await User.findOneAndUpdate({ _id }, {
      $unset: {
        dislikes,
      },
    }, { new: true });

    return res.status(204).end();
  },
};
