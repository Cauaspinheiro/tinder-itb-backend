import School from '../models/School';

export default {
  async index(req, res) {
    const schools = await School.find();

    return res.status(200).json(schools);
  },

  async show(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id });

    if (!school) return res.json('School not found');

    return res.status(201).json(school);
  },

  async store(req, res) {
    const { nome } = req.body;

    let school = await School.findOne({ nome });

    if (school) return res.json('Escola já existe');

    school = await School.create(req.body);

    return res.status(200).json(school);
  },

  async update(req, res) {
    const { id: _id } = req.params;

    let school = await School.findOne({ _id });

    if (!school) return res.json('School not found');

    school = await School.findOneAndUpdate({ _id }, req.body, { new: true });

    return res.status(200).json(school);
  },

  async destroy(req, res) {
    const { id: _id } = req.params;

    let school = await School.findOne({ _id });

    if (!school) return res.json('School not found');

    school = await School.findOneAndDelete({ _id });

    return res.status(200).json(school);
  },
};
