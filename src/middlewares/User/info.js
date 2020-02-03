export default (req, res, next) => {
  const { contatos } = req.user;

  if (!contatos) return res.json('Contatos não encontrados');

  const { numero } = contatos;

  if (numero) {
    if (numero.length !== 13) return res.json('Número inválido');
  }

  return next();
};
