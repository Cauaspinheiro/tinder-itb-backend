import User from '../../models/User';

export default async (req, res, next) => {
  const { images, _id } = req.user;
  const { index } = req.params;

  req.image = images[index];

  images.splice(index, 1);

  await User.updateOne({ _id }, { images });

  return next();
};
