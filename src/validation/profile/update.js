import { Joi, celebrate, Segments } from 'celebrate';

import handleJoiErrors from '../../errors/joi';
import validateGender from '../utils/validateGender';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    gender: Joi.string().custom(validateGender),
    birthdate: Joi.date(),
    bio: Joi.string(),
    email: Joi.string().email(),
    contacts: Joi.object().keys({
      instagram: Joi.string(),
      number: Joi.number(),
      facebook: Joi.string(),
      twitter: Joi.string(),
    }),
    grade: Joi.number().min(1).max(3),
    period: Joi.string().custom((value, helpers) => {
      const allowed = ['MANHÃ', 'TARDE', 'NOITE'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    school_class: Joi.string().length(1).uppercase(),
    school: Joi.string(),
    course: Joi.string(),
    password: Joi.string().min(6),
    prefs: Joi.object().keys({
      school: Joi.string(),
      gender: Joi.string().custom(validateGender),
      grade: Joi.number().min(1).max(3),
      course: Joi.string(),
    }),
  }).error(handleJoiErrors),
});
