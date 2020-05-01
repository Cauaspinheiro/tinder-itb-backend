export default (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      status: '400 Bad Request',
      error: {
        en_us: 'JSON NOT VALID',
        pt_br: 'JSON NÃO É VALIDO',
      },
      details: {
        en_us: 'JSON syntax is invalid, check for any errors in your JSON. '
        + 'For more info about JSON go to '
        + 'https://www.w3schools.com/js/js_json_syntax.asp',
        pt_br: 'A sintaxe do JSON não é valida, verifique se o JSON enviado tem'
        + ' sua sintaxe válida. '
        + 'Para mais informações sobre o JSON, acesse '
        + 'https://dicasdeprogramacao.com.br/o-que-e-json/',
      },
      type: SyntaxError.name,
    });
  }

  return next(err);
};
