import School from '../models/School';

export default {
  async index(req, res) {
    const schools = await School.find({}, { courses: 1, name: 1, location: 1 });

    return res.status(200).json(schools);
  },

  async show(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id });

    if (!school) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

    return res.status(200).json(school);
  },

  async store(req, res) {
    const { name } = req.body;

    const school = await School.findOne({ name });

    if (school) return res.status(400).json({ error: 'SCHOOL ALREADY EXISTS' });

    const { id, name: school_name } = await School.create(req.body);

    return res.status(201).json({ id, school_name });
  },

  async update(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id });

    if (!school) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

    const { courses, name, location } = await School.findOneAndUpdate({ _id },
      req.body, { new: true });

    return res.status(200).json({ courses, name, location });
  },

  async destroy(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id });

    if (!school) return res.status(404).json({ error: 'SCHOOL NOT FOUND' });

    await School.findOneAndDelete({ _id });

    return res.status(204).end();
  },
};
