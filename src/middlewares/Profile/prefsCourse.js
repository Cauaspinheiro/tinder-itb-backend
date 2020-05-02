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
    return errorHandler(res, 404, {
      error: {
        pt_br: `${course} NÃO É UM CURSO DA ESCOLA ${school.name}`,
        en_us: `${course} IS NOT A COURSE OF ${school.name}`,
      },
      details: {
        pt_br: `A escola ${school.name} não tem nenhum curso chamado ${school.course}`,
        en_us: `${school.name} dont have a course called ${school.course}`,
      },
      more_info: {
        course,
        school: school.name,
        valid_courses: school.courses,
      },
    });
  }

  req.body.prefs.course = req.body.prefs.course.toUpperCase();

  return next();
};
