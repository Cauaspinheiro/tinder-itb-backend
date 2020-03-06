import School from '../../models/School';

export default async (req, res, next) => {
  const { curso, escola } = req.body;

  if (!curso) return next();

  if (!escola) return res.status(400).json({ error: 'SCHOOL NOT FOUND IN REQ' });

  const school = await School.findOne({ _id: escola, cursos: { $in: curso } });

  if (!school) return res.status(404).json({ error: 'COURSE NOT FOUND' });

  return next();
};
