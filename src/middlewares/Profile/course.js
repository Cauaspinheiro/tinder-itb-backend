import School from '../../models/School';

export default async (req, res, next) => {
  const { course, school } = req.body;

  const response = await School.findOne({ _id: school, courses: { $in: course.toUpperCase() } });

  if (!response) return res.status(404).json({ error: 'COURSE NOT FOUND' });

  req.body.course = req.body.course.toUpperCase();

  return next();
};
