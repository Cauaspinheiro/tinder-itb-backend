import School from '../../models/School';

export default async (req, res, next) => {
  const { escola } = req.body;

  if (!escola) return next();

  const school = await School.findOne({ nome: escola });

  if (!school) return res.json('Escola não encontrada');

  req.school = school;

  return next();
};
