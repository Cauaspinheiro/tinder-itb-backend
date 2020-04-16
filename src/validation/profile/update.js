import { Joi, celebrate, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    gender: Joi.string().custom((value, helpers) => {
      const allowed = ['MASCULINO', 'FEMININO'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    birthdate: Joi.date(),
    bio: Joi.string(),
    email: Joi.string().email(),
    contacts: Joi.object().min(1).max(4),
    grade: Joi.number().min(1).max(3),
    period: Joi.string().custom((value, helpers) => {
      const allowed = ['MANHÃ', 'TARDE', 'NOITE'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    school_class: Joi.string().length(1).uppercase(),
    school: Joi.string(),
    course: Joi.string(),
    prefs: Joi.object(),
    password: Joi.string().min(6),
  }),
});
