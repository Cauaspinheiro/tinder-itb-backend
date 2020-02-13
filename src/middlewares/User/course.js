import School from '../../models/School';
import User from '../../models/User';

export default async (req, res, next) => {
  const { curso, id } = req.body;
  let { escola } = req.body;

  if (!curso) return next();

  if (!escola) {
    const user = await User.findOne({ id });

    if (!user.escola) return res.status(404).json('Escola não encontrada');

    escola = user.escola;
  }

  const school = await School.findOne({ nome: escola, cursos: { $in: curso } });

  if (!school) return res.status(404).json('Curso não foi encontrado');

  return next();
};
