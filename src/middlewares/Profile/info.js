import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  if (!req.body.contacts) return next();

  const { number, twitter } = req.body.contacts;

  if (number) {
    if (number.toString().length !== 13 || number.toString().indexOf('5511') !== 0) {
      return errorHandler(res, 400, {
        error: {
          pt_br: 'NÚMERO DE TELEFONE INVÁLIDO',
          en_us: 'INVALID PHONE NUMBER',
        },
        details: {
          pt_br: 'O número de telefone é inválido, por favor siga o seguinte formato: 55119<seu-número>',
          en_us: 'The phone number is invalid, please follow the following format: 55119<your-number>',
        },
        more_info: {
          number,
          accepted_value: '5511912345678',
        },
      });
    }
  }

  if (twitter) {
    if (twitter.indexOf('@') !== 0) {
      return errorHandler(res, 400, {
        error: {
          pt_br: 'NOME DE USUÁRIO DO TWITTER INVÁLIDO',
          en_us: 'INVALID TWITTER USERNAME',
        },
        details: {
          pt_br: 'O nome de usuário do twitter precisa começar com um @',
          en_us: 'The twitter username must begin with an @',
        },
        more_info: {
          twitter,
          accepted_value: '@<username>',
        },
      });
    }
  }

  req.body.show_me = true;

  return next();
};
