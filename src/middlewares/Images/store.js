import bucket from '../../config/firebase';

export default async (req, res, next) => {
  const { filename } = req.file;

  await bucket.upload(`tmp/uploads/${filename}`, {
    gzip: true,
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
  });

  req.publicUrl = `https://firebasestorage.googleapis.com/v0/b/tinder-itb.appspot.com/o/${filename}?alt=media`;

  return next();
};
