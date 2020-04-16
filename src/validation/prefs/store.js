import { Joi, celebrate, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    escola: Joi.string(),
    generos: Joi.array().max(2).custom((value, helpers) => {
      const allowed = ['MASCULINO', 'FEMININO'];

      if (!value) return value;

      let isValid = true;

      value.forEach((element) => {
        if (!isNaN(parseFloat(element)) && isFinite(element)) {
          isValid = false;
        } else if (!allowed.includes(element.toUpperCase())) isValid = false;
      });

      if (!isValid) return helpers.error('any.invalid');

      return value;
    }),
    anos: Joi.array().max(3).custom((value, helpers) => {
      const allowed = ['1', '2', '3'];

      if (!value) return value;

      let isValid = true;

      value.forEach((element) => {
        if (!allowed.includes(element)) isValid = false;
      });

      if (!isValid) return helpers.error('any.invalid');

      return value;
    }),
    cursos: Joi.array(),
  }),
});
