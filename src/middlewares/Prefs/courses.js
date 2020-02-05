import School from '../../models/School';

export default async (req, res, next) => {
  let { cursos } = req.body;
  let { school } = req;

  if (!cursos) return next();

  cursos = cursos.map((curso) => curso.toUpperCase());

  req.body.cursos = cursos;

  if (!school) {
    for await (const curso of cursos) {  // eslint-disable-line
      school = await School.find({ cursos: { $in: curso } });


      if (school.length === 0) {
        return res.json('Curso não encontrado');
      }
    }

    return next();
  }

  school = await School.findOne({ _id: school.id, cursos: { $all: cursos } });


  if (!school) return res.json('Curso não encontrado nessa escola');

  return next();
};
