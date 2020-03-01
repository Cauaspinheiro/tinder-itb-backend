import bucket from '../../config/firebase';

export default async (req, res, next) => {
  const { index } = req.params;
  const publicUrl = req.user.images[index];

  const filename = publicUrl.substring(69, publicUrl.indexOf('?alt=media'));

  const file = bucket.file(filename);

  await file.delete().then(() => next()).catch((err) => res.status(500).json(err));
};
