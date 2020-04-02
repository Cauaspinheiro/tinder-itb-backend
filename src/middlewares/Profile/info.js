export default (req, res, next) => {
  const { numero } = req.body.contatos;

  if (numero) {
    if (numero.length !== 13) return res.status(400).json({ error: 'INVALID PHONE NUMBER' });
  }

  req.body.show_me = true;

  return next();
};
