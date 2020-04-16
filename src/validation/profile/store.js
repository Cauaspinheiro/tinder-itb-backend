import { Joi, celebrate, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required(),
    genero: Joi.string().required().custom((value, helpers) => {
      const allowed = ['MASCULINO', 'FEMININO'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    data_nascimento: Joi.date().required(),
    bio: Joi.string().required(),
    email: Joi.string().email().required(),
    contatos: Joi.object().min(1).max(4).required(),
    ano: Joi.number().min(1).max(3).required(),
    periodo: Joi.string().required().custom((value, helpers) => {
      const allowed = ['MANHÃ', 'TARDE', 'NOITE'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    sala: Joi.string().length(1).required().uppercase(),
    escola: Joi.string().required(),
    curso: Joi.string().required(),
    prefs: Joi.object(),
    password: Joi.string().min(6).required(),
  }),
});
