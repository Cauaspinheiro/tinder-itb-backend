export default (req, res, next) => {
  const { password } = req.body;

  if (!password) return next();

  if (password.length < 6) return res.json('Senha inválida');

  return next();
};
