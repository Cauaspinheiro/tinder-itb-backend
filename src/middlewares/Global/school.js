import School from '../../models/School';

export default async (req, res, next) => {
  const { escola } = req.body;

  if (!escola) return next();

  let school;

  try {
    school = await School.findOne({ _id: escola });
  } catch (error) {
    return res.status(400).json({ error: 'INCORRECT ID' });
  }

  if (!school) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

  req.school = school;

  req.body.nome_escola = school.local;

  return next();
};
