async function checkCourses(req, res, next) {
  const { cursos } = req.prefs;
  const { school } = req;

  if (!cursos) return next();

  if (!school) return res.json('Escola não encontrada');

  for (let i = 0; i < cursos.lenght;) {
    if (school.cursos.includes(cursos[i])) {
      return res.json('Curso não encontrado nessa escola');
    }
  }

  return next();
}

export default checkCourses;
