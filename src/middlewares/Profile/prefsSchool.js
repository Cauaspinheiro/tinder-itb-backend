import errorByStatus from '../../errors/errorByStatus';
import School from '../../models/School';

export default async (req, res, next) => {
  const { prefs } = req.body;

  if (!prefs) return next();

  const { school } = prefs;

  if (!school) return next();

  const response = await School.findOne({ _id: school });

  if (!response) {
    return errorByStatus(res, 404, {
      error: {
        pt_br: 'ESCOLA NÃO ENCONTRADA',
        en_us: 'SCHOOL NOT FOUND',
      },
      details: {
        pt_br: 'Nenhuma escola foi encontrada com esse id',
        en_us: 'We dont have a school with this id',
      },
      more_info: {
        id: school,
      },
    });
  }

  req.prefsSchool = response;

  return next();
};
