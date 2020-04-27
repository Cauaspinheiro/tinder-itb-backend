import User from '../models/User';

export default {
  async index(req, res) {
    const { user } = req;

    return res.status(200).json(user.likes);
  },

  async store(req, res) {
    const { targetUser, user } = req;

    user.likes.push(targetUser.id);

    await user.save();

    return res.status(201).end();
  },

  async destroy(req, res) {
    const { _id, likes } = req.user;

    await User.findOneAndUpdate({ _id }, {
      $unset: {
        likes,
      },
    }, { new: true });

    return res.status(204).end();
  },
};
