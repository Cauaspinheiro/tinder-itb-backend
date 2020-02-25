export default async (req, res, next) => {
  const { targetUser, user } = req;

  if (!targetUser.likes.includes(user.id)) return next();

  for (let i = 0; i < targetUser.likes.length; i += 1) {
      if (targetUser.likes[i] == user.id) { //eslint-disable-line
      targetUser.likes.splice(i, 1);
      break;
    }
  }

  targetUser.matchs.push(user.id);
  user.matchs.push(targetUser);

  if (!user.newMatchs) { user.newMatchs = 1; } else user.newMatchs += 1;

  if (!targetUser.newMatchs) {
    targetUser.newMatchs = 1;
  } else targetUser.newMatchs += 1;


  await targetUser.save();
  await user.save();

  return res.status(200).json({ 'NEW MATCH': targetUser.id, newMatchs: user.newMatchs });
};
