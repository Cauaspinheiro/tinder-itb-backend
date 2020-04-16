export default (req, res, next) => {
  const { number, twitter } = req.body.contatos;

  if (number) {
    if (number.length !== 13) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });

    if (number.indexOf('5511') !== 0) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });
  }

  if (twitter) {
    if (twitter.indexOf('@') !== 0) return res.status(400).json({ error: 'INVALID TWITTER USERNAME' });
  }

  req.body.show_me = true;

  return next();
};
