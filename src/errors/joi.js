import {
  required, string, gender, date, maxDate, minDate, email, object, unknownField,
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
    case 'date.max':
      return maxDate(error);
    case 'date.min':
      return minDate(error);
    case 'string.email':
      return email(error);
    case 'object.base':
      return object(error);
    case 'object.unknown':
      return unknownField(error);
    default:
      return error;
  }
});
