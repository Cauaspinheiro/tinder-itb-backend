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
};
