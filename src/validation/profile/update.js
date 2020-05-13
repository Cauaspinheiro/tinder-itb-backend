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
    shift: Joi.string().custom((value, helpers) => {
      const allowed = ['MANHÃ', 'TARDE', 'NOITE'];

      if (!allowed.includes(value.toUpperCase())) return helpers.error('any.invalid');

      return value;
    }),
    school_class: Joi.string().length(1).uppercase().custom((value, helpers) => {
      if (!/^[a-zA-Z]/.test(value)) return helpers.error('any.custom');

      return value;
    }),
    school: Joi.string(),
    course: Joi.string(),
    password: Joi.string().min(6),
    prefs: Joi.object().keys({
      school: Joi.string(),
      gender: Joi.string().custom(validateGender),
      grade: Joi.number().min(1).max(3),
      course: Joi.string(),
    }),
    images: Joi.forbidden(),
    likes: Joi.forbidden(),
    dislikes: Joi.forbidden(),
    matchs: Joi.forbidden(),
    password_hash: Joi.forbidden(),
    new_matchs: Joi.forbidden(),
  }).error(handleJoiErrors),
});
