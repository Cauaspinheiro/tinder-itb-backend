import errorByStatus from '../../errors/errorByStatus';
import School from '../../models/School';

export default async (req, res, next) => {
  const { school } = req.body;

  if (!school) return next();

  const response = await School.findOne({ _id: school });

  if (!response) {
    return errorByStatus(res, 404, {
      error: {
        pt_br: 'ESCOLA NÃO ENCONTRADA',
        en_us: 'SCHOOL NOT FOUND',
      },
      details: {
        pt_br: `Nenhuma escola com o id ${school} foi encontrada.`,
        en_us: `We dont have a school with the ${school} id`,
      },
      more_info: {
        id: school,
      },
    });
  }

  req.school = response;

  req.body.school_name = response.location;

  return next();
};
