import bucket from '../../config/firebase';

export default async (req, res, next) => {
  const { images } = req.user;

  if (images.length === 0) return next();

  const promises = images.map(async (image) => {
    const filename = image.substring(69, image.indexOf('?alt=media'));

    const file = bucket.file(filename);

    const promise = await file.delete();

    return promise;
  });

  await Promise.all(promises);

  return next();
};
