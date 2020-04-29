const DEFAULTS = {
  STATUS: '400 Bad Request',
  TYPE: 'ValidationError',
};

export function required(error) {
  error.message = {
    status: DEFAULTS.STATUS,
    error: {
      pt_br: `O CAMPO ${error.local.label.toUpperCase()} É OBRIGATÓRIO`,
    },
    details: {
      pt_br: `O campo ${error.local.label} é necessário para concluir essa requisição.`,
    },
    more_info: {
      label: error.local.label,
      code: error.code,
    },
    type: DEFAULTS.TYPE,
  };

  return error;
}

export function string(error) {
  error.message = {
    status: DEFAULTS.STATUS,
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
      code: error.code,
    },
    type: DEFAULTS.TYPE,
  };

  return error;
}
