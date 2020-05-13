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

export function custom(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É VALIDO PARA O CAMPO `
      + `${error.local.label.toUpperCase()}`,
    },
    details: {
      pt_br: `O campo ${error.local.label} não aceita o valor ${error.local.value}`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
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

export function number(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O VALOR ${error.local.value} NÃO É VALIDO PARA O CAMPO `
      + `${error.local.label.toUpperCase()}`,
    },
    details: {
      pt_br: `O campo ${error.local.label} aceita apenas valores numéricos`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: Number.name,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function minNumber(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label} PRECISA DE UM VALOR MAIOR OU IGUAL A `
      + `${error.local.limit}`,
    },
    details: {
      pt_br: `O valor ${error.local.value} não é válido para o campo ${error.local.label}`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: `>= ${error.local.limit}`,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function maxNumber(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label} PRECISA DE UM VALOR MENOR OU IGUAL A `
      + `${error.local.limit}`,
    },
    details: {
      pt_br: `O valor ${error.local.value} não é válido para o campo ${error.local.label}`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: `<= ${error.local.limit}`,
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function length(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label.toUpperCase()} PRECISA DE UM VALOR COM O TAMANHO `
      + `${error.local.limit}`,
    },
    details: {
      pt_br: `O valor ${error.local.value} não é valido para o campo ${error.local.label}`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: { type: String.name, length: error.local.limit },
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function minString(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label.toUpperCase()} PRECISA DE UM VALOR COM O TAMANHO `
      + `MAIOR QUE ${error.local.limit}`,
    },
    details: {
      pt_br: `O valor ${error.local.value} não é valido para o campo ${error.local.label}`,
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: { type: String.name, length: `> ${error.local.limit}` },
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}

export function alphabetic(error) {
  error.message = {
    status: DEFAULT.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label.toUpperCase()} PRECISA DE UM VALOR ALFABÉTICO`,
    },
    details: {
      pt_br: `O valor ${error.local.value} não é valido para o campo ${error.local.label},`
       + ' porque ele precisa ser um valor alfabético (letras de A-Z)',
    },
    more_info: {
      label: error.local.label,
      value: error.local.value,
      accepted_values: 'A-Z',
      error_code: error.code,
    },
    type: DEFAULT.TYPE,
  };

  return error;
}
