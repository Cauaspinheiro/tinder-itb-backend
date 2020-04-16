export default (req, res, next) => {
  const { numero, twitter } = req.body.contatos;

  if (numero) {
    if (numero.length !== 13) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });

    if (numero.indexOf('5511') !== 0) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });
  }

  if (twitter) {
    if (twitter.indexOf('@') !== 0) return res.status(400).json({ error: 'INVALID TWITTER USERNAME' });
  }

  req.body.show_me = true;

  return next();
};
