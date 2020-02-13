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

    return res.status(201).json(user.likes);
  },

  async update(req, res) {
    const { targetUser, user } = req;

    for (let i = 0; i < user.likes.length; i += 1) {
      if (user.likes[i] == targetUser.id) { //eslint-disable-line
        user.likes.splice(i, 1);
      }
    }

    await user.save();

    return res.status(200).json(user.likes);
  },

  async destroy(req, res) {
    const { _id, likes } = req.user;

    const user = await User.findOneAndUpdate({ _id }, {
      $unset: {
        likes,
      },
    }, { new: true });

    return res.status(200).json(user);
  },
};
