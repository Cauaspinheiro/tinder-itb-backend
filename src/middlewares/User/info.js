export default (req, res, next) => {
  const { contatos, password } = req.body;

  if (!contatos) return res.status(400).json({ error: 'CONTACTS NOT FOUND' });

  const { numero } = contatos;

  if (numero) {
    if (numero.length !== 13) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });
  }

  if (!password) return res.status(400).json({ error: 'PASSWORD NOT FOUND' });

  if (password.length < 6) return res.status(400).json({ error: 'INVALID PASSWORD' });

  req.body.show_me = true;

  return next();
};
