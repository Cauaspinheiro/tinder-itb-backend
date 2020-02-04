export default {
  async index(req, res) {
    const { paramUser: user } = req;

    const { newMatchs, matchs } = user;

    user.newMatchs = 0;

    await user.save();

    return res.json({ matchs, newMatchs });
  },


  async update(req, res) {
    const { paramUser: targetUser, headerUser: user } = req;

    for (let i = 0; i < user.matchs.length; i += 1) {
      if (user.matchs[i] == targetUser.id) { //eslint-disable-line
        user.matchs.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < targetUser.matchs.length; i += 1) {
      if (targetUser.matchs[i] == user.id) { //eslint-disable-line
        targetUser.matchs.splice(i, 1);
        break;
      }
    }

    await user.save();
    await targetUser.save();

    return res.json(user.matchs);
  },
};
