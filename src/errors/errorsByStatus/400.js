export default (res, error) => {
  if (!error) {
    throw new Error('INVALID ERROR JSON');
  }

  if (!error.error.en_us || !error.error.pt_br) {
    throw new Error('INVALID ERROR JSON: ERROR.EN_US/PT_BR MUST BE PROVIDED');
  }

  if (!error.details.en_us || !error.details.pt_br) {
    throw new Error('INVALID ERROR JSON: DETAILS.EN_US/PT_BR MUST BE PROVIDED');
  }

  return res.status(400).json({
    status: '400 Bad Request',
    error: {
      en_us: error.error.en_us,
      pt_br: error.error.pt_br,
    },
    details: {
      en_us: error.details.en_us,
      pt_br: error.details.pt_br,
    },
    more_info: error.more_info,
    type: error.type,
  });
};
