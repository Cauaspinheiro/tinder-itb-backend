import { Joi, celebrate, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    gender: Joi.string().required().custom((value, helpers) => {
      const allowed = ['MASCULINO', 'FEMININO'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    birthdate: Joi.date().required(),
    bio: Joi.string().required(),
    email: Joi.string().email().required(),
    contacts: Joi.object().min(1).max(4).required(),
    grade: Joi.number().min(1).max(3).required(),
    period: Joi.string().required().custom((value, helpers) => {
      const allowed = ['MANHÃ', 'TARDE', 'NOITE'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    school_class: Joi.string().length(1).required().uppercase(),
    school: Joi.string().required(),
    course: Joi.string().required(),
    prefs: Joi.object(),
    password: Joi.string().min(6).required(),
  }),
});
