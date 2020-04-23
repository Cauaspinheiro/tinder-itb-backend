import School from '../../../models/School';

export default async (req, res, next) => {
  const { course } = req.body;
  const { user } = req;
  let { school } = req.body;

  if (!course) return next();

  if (!school) {
    if (!user.school) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

    school = user.school;
  }

  const response = await School.findOne({ _id: school, courses: { $in: course.toUpperCase() } });

  if (!response) return res.status(404).json({ error: 'COURSE NOT FOUND' });

  req.body.course = req.body.course.toUpperCase();

  return next();
};
