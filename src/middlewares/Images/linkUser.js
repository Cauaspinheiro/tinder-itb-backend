export default async (req, res, next) => {
  const { publicUrl: path } = req;
  const { user } = req;

  await user.images.push(path);
  await user.save();

  return next();
};
