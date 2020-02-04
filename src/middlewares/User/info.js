export default (req, res, next) => {
  const { contatos, password } = req.user;

  if (!contatos) return res.json('Contatos não encontrados');

  const { numero } = contatos;

  if (numero) {
    if (numero.length !== 13) return res.json('Número inválido');
  }

  if (!password) return res.json('Não há senha');

  return next();
};
