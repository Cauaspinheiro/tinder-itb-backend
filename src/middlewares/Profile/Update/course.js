import errorByStatus from '../../../errors/errorByStatus';
import School from '../../../models/School';

export default async (req, res, next) => {
  const { course } = req.body;
  const { user } = req;
  const { school = user.school } = req.body;

  if (!course) return next();

  const response = await School.findOne({ _id: school, courses: { $in: course.toUpperCase() } });

  if (!response) {
    return errorByStatus(res, 404, {
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

  req.body.course = req.body.course.toUpperCase();

  return next();
};
