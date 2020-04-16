import School from '../../models/School';

export default async (req, res, next) => {
  let { courses } = req.body;
  let { school } = req;

  if (!courses) return next();

  courses = courses.map((course) => course.toUpperCase());

  req.body.courses = courses;

  if (!school) {
    for await (const course of courses) {  // eslint-disable-line
      school = await School.find({ courses: { $in: course } });


      if (school.length === 0) {
        return res.status(404).json({ error: 'COURSE NOT FOUND' });
      }
    }

    return next();
  }

  school = await School.findOne({ _id: school.id, courses: { $all: courses } });


  if (!school) return res.status(404).json({ error: 'COURSE NOT FOUND IN SCHOOL' });

  return next();
};
