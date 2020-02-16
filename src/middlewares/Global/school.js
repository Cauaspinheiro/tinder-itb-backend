import School from '../../models/School';

export default async (req, res, next) => {
  const { escola } = req.body;

  if (!escola) return next();

  const school = await School.findOne({ _id: escola });

  if (!school) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

  req.school = school;

  return next();
};
