import { required, string } from './joiReturns';

export default (errors) => errors.map((error) => {
  switch (error.code) {
    case 'any.required':
      return required(error);
    case 'string.base':
      return string(error);
    default:
      return error;
  }
});
