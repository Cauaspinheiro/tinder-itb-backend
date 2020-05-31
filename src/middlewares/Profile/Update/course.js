import documentation from '../../../constants/documentation';
import errorByStatus from '../../../errors/errorByStatus';
import School from '../../../models/School';

export default async (req, res, next) => {
  const { course } = req.body;
  const { user } = req;
  const { school = user.school } = req.body;

  if (!course) return next();

  const response = await School.findOne({ _id: school });

  if (!response) {
    return errorByStatus(res, 404, {
      error: {
        pt_br: `NÃO EXISTE NENHUMA ESCOLA COM O ID ${school}`,
        en_us: `WE DONT FIND ANY SCHOOL WITH THE ${school} ID`,
      },
      details: {
        pt_br: `Nenhuma escola com o id ${school} foi encontrada`,
        en_us: `We not found any school with the ${school} id`,
      },
      more_info: {
        course,
        id: school,
      },
      documentation_link: documentation,
    });
  }

  if (!response.courses.includes(course)) {
    return errorByStatus(res, 404, {
      error: {
        pt_br: `${course} NÃO É UM CURSO DA ESCOLA ${response.name}`,
        en_us: `${course} IS NOT A COURSE OF ${response.name}`,
      },
      details: {
        pt_br: `A escola ${response.name} não tem nenhum curso chamado ${response.course}`,
        en_us: `${response.name} dont have a course called ${response.course}`,
      },
      more_info: {
        course,
        school: response.name,
        school_id: response.id,
        valid_courses: response.courses,
      },
      documentation_link: documentation,
    });
  }

  req.body.course = req.body.course.toUpperCase();

  return next();
};
