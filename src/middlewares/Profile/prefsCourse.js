import errorHandler from '../../errors/errorByStatus';

export default async (req, res, next) => {
  const { prefs } = req.body;

  if (!prefs) return next();

  const { course } = prefs;

  const { prefsSchool: school } = req;

  if (!course) return next();

  if (!school) {
    return errorHandler(res, 400, {
      error: {
        en_us: 'FOUND COURSE, BUT NOT SCHOOL',
        pt_br: 'ENCONTRADO CURSO, MAS NÃO ESCOLA',
      },
      details: {
        en_us: 'You must provide a school for validate a course',
        pt_br: 'Para validar o curso, você precisa definir uma escola também',
      },
      more_info: {
        course,
      },
    });
  }

  if (!school.courses.includes(course.toUpperCase())) {
    return res.status(404).json({ error: 'COURSE NOT FOUND IN SCHOOL' });
  }

  req.body.prefs.course = req.body.prefs.course.toUpperCase();

  return next();
};
