import School from '../../models/School';
import User from '../../models/User';

async function checkCourse(req, res, next) {
  const { curso, id } = req.body;
  let { escola } = req.body;

  if (!curso) return next();

  if (!escola) {
    const user = await User.findOne({ id });

    if (!user.escola) return res.json('Escola não encontrada');

    escola = user.escola;
  }

  const school = await School.findOne({ nome: escola, cursos: { $in: curso } });

  if (!school) return res.json('Curso não foi encontrado');

  return next();
}

export default checkCourse;
