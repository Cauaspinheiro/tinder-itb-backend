import School from '../models/School';

export default {
  async index(req, res) {
    const schools = await School.find({}, { cursos: 1, nome: 1, local: 1 });

    return res.status(200).json(schools);
  },

  async show(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id }, { cursos: 1, nome: 1, local: 1 });

    if (!school) return res.status(404).json('School not found');

    return res.status(200).json(school);
  },

  async store(req, res) {
    const { nome } = req.body;

    const school = await School.findOne({ nome });

    if (school) return res.status(400).json('Escola já existe');

    const { id, nome: name } = await School.create(req.body);

    return res.status(201).json({ id, name });
  },

  async update(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id });

    if (!school) return res.status(404).json('School not found');

    const { cursos, nome, local } = await School.findOneAndUpdate({ _id }, req.body, { new: true });

    return res.status(200).json({ cursos, nome, local });
  },

  async destroy(req, res) {
    const { id: _id } = req.params;

    let school = await School.findOne({ _id });

    if (!school) return res.status(404).json('School not found');

    school = await School.findOneAndDelete({ _id });

    return res.status(204).end();
  },
};
