import School from '../../../models/School';

export default async (req, res, next) => {
  const { curso } = req.body;
  const { user } = req;
  let { escola } = req.body;

  if (!curso) return next();

  if (!escola) {
    if (!user.escola) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

    escola = user.escola;
  }

  const school = await School.findOne({ _id: escola, cursos: { $in: curso } });

  if (!school) return res.status(404).json({ error: 'COURSE NOT FOUND' });

  return next();
};
