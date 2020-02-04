export default (req, res, next) => {
  const { contatos } = req.body;

  if (!contatos) return next();

  const { numero } = contatos;

  if (numero) {
    if (numero.length !== 13) return res.json('Número inválido');
  }

  return next();
};
