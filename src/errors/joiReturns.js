import calculateAge from './utils/calculateAge';

const DEFAULT = {
  STATUS: '400 Bad Request',
  TYPE: 'ValidationError',
};

export function required(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label.toUpperCase()} É OBRIGATÓRIO`,
    },
    details: {
      pt_br: `O campo ${error.local.label} é necessário para concluir essa requisição.`,
    },
    more_info: {
      label: error.local.label,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function string(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É VALIDO PARA O CAMPO ${error.local.label.toUpperCase()}`,
    },
    details: {
      pt_br: `O campo ${error.local.label} aceita apenas strings.`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: 'String',
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function gender(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É VALIDO PARA O CAMPO `
      + `${error.local.label.toUpperCase()}`,
    },
    details: {
      pt_br: `O campo ${error.local.label} aceita apenas os valores MASCULINO e FEMININO`
      + ' (não precisa estar em maiúsculo)',
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: ['MASCULINO', 'FEMININO'],
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function date(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É VALIDO PARA O CAMPO `
      + `${error.local.label.toUpperCase()}`,
    },
    details: {
      pt_br: `O campo ${error.local.label} aceita apenas data válidas pelo JavaScript.`
      + ' Para mais informações acesse https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date',
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: Date.name,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}


export function maxDate(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `VOCÊ PRECISA SER MAIOR QUE ${calculateAge(error.local.limit)} ANOS `
      + 'PARA ACESSAR',
    },
    details: {
      pt_br: `O campo ${error.local.label} precisa de uma idade maior que`
      + ` ${calculateAge(error.local.limit)} anos`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: `< ${new Date(error.local.limit).toDateString()}`,
      age_provided: calculateAge(error.local.value),
      accepted_age: `< ${calculateAge(error.local.limit)}`,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function minDate(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `VOCÊ PRECISA SER MENOR QUE ${calculateAge(error.local.limit)} ANOS `
      + 'PARA ACESSAR',
    },
    details: {
      pt_br: `O campo ${error.local.label} precisa de uma idade menor que`
      + ` ${calculateAge(error.local.limit)} anos`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: `> ${new Date(error.local.limit).toDateString()}`,
      age_provided: calculateAge(error.local.value),
      accepted_age: `> ${calculateAge(error.local.limit)}`,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function email(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É UM E-MAIL VÁLIDO`,
    },
    details: {
      pt_br: `O campo ${error.local.label} precisa de um e-mail válido`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: 'email',
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function object(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É UM OBJETO`,
    },
    details: {
      pt_br: `O campo ${error.local.label} precisa ser um objeto válido. `
      + 'Para mais informações, acesse '
      + 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos',
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: Object.name,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function unknownField(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label.split('.')[0]} NÃO ACEITA A PROPRIEDADE `
      + `${error.local.child}`,
    },
    details: {
      pt_br: `${error.local.child} não é uma propriedade válida para o objeto `
      + `${error.local.label.split('.')[0]}`,
    },
    more_info: {
      object: error.local.label.split('.')[0],
      label: error.local.label,
      key: error.local.key,
      value: error.local.value,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}
