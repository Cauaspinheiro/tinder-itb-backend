export default (req, res, next) => {
  const { number, twitter } = req.body.contacts;

  if (number) {
    if (number.toString().length !== 13) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });

    if (number.toString().indexOf('5511') !== 0) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });
  }

  if (twitter) {
    if (twitter.indexOf('@') !== 0) return res.status(400).json({ error: 'INVALID TWITTER USERNAME' });
  }

  req.body.show_me = true;

  return next();
};
