import documentation from '../constants/documentation';

export default (req, res, next) => res.status(404).json({
  status: '404 Not Found',
  error: {
    en_us: `CANNOT ${req.method} IN ${req.url}`,
    pt_br: `NÃO FOI POSSÍVEL ${req.method} EM ${req.url}`,
  },
  details: {
    en_us: `Cannot find the method ${req.method} in the route ${req.url}, `
    + 'check if the route and the method are both correct',
    pt_br: `Não encontramos o método ${req.method} na rota ${req.url}, verifique `
    + 'se o caminho e o método estão corretos',
  },
  type: 'RouteError',
  more_info: {
    method: req.method,
    route: req.url,
  },
  documentation_link: documentation,
});
