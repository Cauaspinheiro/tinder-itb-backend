export default async (req, res, next) => {
  const { path } = req.file;
  const { user } = req;

  await user.images.push(path);
  await user.save();

  return next();
};
