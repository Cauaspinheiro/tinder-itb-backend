export default (req, res, next) => {
  const { contatos, password } = req.body;

  if (!contatos) return res.status(404).json('Contatos não encontrados');

  const { numero } = contatos;

  if (numero) {
    if (numero.length !== 13) return res.status(400).json('Número inválido');
  }

  if (!password) return res.status(400).json('Não há senha');

  if (password.length < 6) return res.status(400).json('Senha inválida');

  return next();
};
