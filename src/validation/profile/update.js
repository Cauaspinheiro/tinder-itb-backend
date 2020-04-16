import { Joi, celebrate, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string(),
    genero: Joi.string().custom((value, helpers) => {
      const allowed = ['MASCULINO', 'FEMININO'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    data_nascimento: Joi.date(),
    bio: Joi.string(),
    email: Joi.string().email(),
    contatos: Joi.object().min(1).max(4),
    ano: Joi.number().min(1).max(3),
    periodo: Joi.string().custom((value, helpers) => {
      const allowed = ['MANHÃ', 'TARDE', 'NOITE'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    sala: Joi.string().length(1).uppercase(),
    escola: Joi.string(),
    curso: Joi.string(),
    prefs: Joi.object(),
    password: Joi.string().min(6),
  }),
});
