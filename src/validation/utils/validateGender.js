export default (value, helpers) => {
  const allowed = ['MASCULINO', 'FEMININO'];

  if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

  return value.toUpperCase();
};
