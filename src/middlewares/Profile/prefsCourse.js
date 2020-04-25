export default async (req, res, next) => {
  const { prefs } = req.body;

  if (!prefs) return next();

  const { course } = prefs;

  const { prefsSchool: school } = req;

  if (!course) return next();

  if (!school) {
    return res.status(400).json({ error: 'FOUND COURSE, BUT NOT SCHOOL' });
  }

  if (!school.courses.includes(course.toUpperCase())) {
    return res.status(404).json({ error: 'COURSE NOT FOUND IN SCHOOL' });
  }

  req.body.prefs.course = req.body.prefs.course.toUpperCase();

  return next();
};
