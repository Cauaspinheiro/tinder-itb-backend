export default (req, res, next) => {
  const { contacts } = req.body;

  if (!contacts) return next();

  const { number } = contacts;

  if (number) {
    if (number.toString().length !== 13) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });
  }

  return next();
};
