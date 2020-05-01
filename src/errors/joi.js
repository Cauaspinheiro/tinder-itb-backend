import {
  required, string, custom, date, maxDate, minDate, email, object, unknownField, number,
  minNumber,
  maxNumber,
} from './joiReturns';

export default (errors) => errors.map((error) => {
  switch (error.code) {
    case 'any.required':
      return required(error);
    case 'string.base':
      return string(error);
    case 'any.invalid':
      return custom(error);
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
    case 'number.base':
      return number(error);
    case 'number.min':
      return minNumber(error);
    case 'number.max':
      return maxNumber(error);
    default:
      return error;
  }
});
