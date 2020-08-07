import documentation from '../constants/documentation';

export default (res, statusError, error) => {
  if (!error) {
    throw new Error('INVALID ERROR JSON');
  }

  if (!error.error.en_us || !error.error.pt_br) {
    throw new Error('INVALID ERROR JSON: ERROR.EN_US/PT_BR MUST BE PROVIDED');
  }

  if (!error.details.en_us || !error.details.pt_br) {
    throw new Error('INVALID ERROR JSON: DETAILS.EN_US/PT_BR MUST BE PROVIDED');
  }

  if (!statusError) throw new Error('STATUS NOT FOUND');

  let status;

  switch (statusError) {
    case 400:
      status = '400 Bad Request';
      break;
    case 401:
      status = '401 Unauthorized';
      break;
    case 404:
      status = '404 Not Found';
      break;
    default:
      status = statusError;
  }

  return res.status(!isNaN(statusError) ? statusError : 400).json({
    status,
    error: {
      en_us: error.error.en_us,
      pt_br: error.error.pt_br,
    },
    details: {
      en_us: error.details.en_us,
      pt_br: error.details.pt_br,
    },
    more_info: error.more_info,
    documentation_link: documentation,
    type: error.type,
  });
};
