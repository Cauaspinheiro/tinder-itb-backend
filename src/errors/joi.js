import {
  required, string, gender, date,
} from './joiReturns';

export default (errors) => errors.map((error) => {
  switch (error.code) {
    case 'any.required':
      return required(error);
    case 'string.base':
      return string(error);
    case 'any.invalid':
      return gender(error);
    case 'date.base':
      return date(error);
    default:
      return error;
  }
});
