import School from '../../models/School';

export default async (req, res, next) => {
  const { school } = req.body;

  if (!school) return next();

  const response = await School.findOne({ _id: school });

  if (!response) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

  req.school = response;

  req.body.school_name = response.location;

  return next();
};
