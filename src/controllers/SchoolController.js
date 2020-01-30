import School from "../models/School";

export default {
  async index(req, res) {
    const schools = await School.find();

    return res.json(schools);
  },

  async show(req, res) {
    const _id = req.params.id;

    const school = await School.findOne({ _id });

    if (!school) return res.json("School not found");

    return res.json(school);
  },

  async store(req, res) {
    const { nome } = req.body;

    let school = await School.findOne({ nome });

    if (school) return res.json("Escola já existe");

    school = await School.create(req.body);

    return res.json(school);
  },

  async update(req, res) {
    const _id = req.params.id;

    let school = await School.findOne({ _id });

    if (!school) return res.json("School not found");

    school = await School.findOneAndUpdate({ _id }, req.body, { new: true });

    return res.json(school);
  },

  async destroy(req, res) {
    const _id = req.params.id;

    let school = await School.findOne({ _id });

    if (!school) return res.json("School not found");

    school = await School.findOneAndDelete({ _id });

    return res.json(school);
  }
};
