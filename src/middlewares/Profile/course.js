import School from '../../models/School';

export default async (req, res, next) => {
  const { course, school } = req.body;

  if (!school) return res.status(400).json({ error: 'SCHOOL NOT FOUND IN REQ' });

  const response = await School.findOne({ _id: school, courses: { $in: course.toUpperCase() } });

  if (!response) return res.status(404).json({ error: 'COURSE NOT FOUND' });

  return next();
};
