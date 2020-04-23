import School from '../../models/School';

export default async (req, res, next) => {
  const { prefs } = req.body;

  if (!prefs) return next();

  const { school } = prefs;

  if (!school) return next();

  const response = await School.findOne({ _id: school });

  if (!response) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

  req.prefs = {
    school: response,
  };

  return next();
};
