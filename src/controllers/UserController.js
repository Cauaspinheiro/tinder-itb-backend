import User from '../models/User';

export default {
  async index(req, res) {
    const { prefs } = req;

    const users = await User.find(prefs, {
      nome: 1,
      genero: 1,
      data_nascimento: 1,
      bio: 1,
      ano: 1,
      curso: 1,
      periodo: 1,
      nome_escola: 1,
      sala: 1,
      images: 1,
    });

    return res.status(200).json(users);
  },

  async show(req, res) {
    const {
      likes,
      deslikes,
      matchs,
      id,
      nome,
      genero,
      data_nascimento,
      bio,
      detalhes,
      contatos,
      ano,
      periodo,
      sala,
      show_me,
      nome_escola,
      curso,
      images,
    } = req.user;

    return res.status(200).json({
      likes,
      deslikes,
      matchs,
      id,
      nome,
      genero,
      data_nascimento,
      bio,
      detalhes,
      contatos,
      ano,
      periodo,
      sala,
      show_me,
      nome_escola,
      curso,
      images,
    });
  },

  async store(req, res) {
    const { _id } = await User.create(req.body);

    return res.status(201).json(_id);
  },

  async update(req, res) {
    const { _id } = req.user;

    const {
      nome,
      genero,
      data_nascimento,
      bio,
      detalhes,
      contatos,
      ano,
      periodo,
      sala,
      show_me,
      nome_escola,
      curso,
    } = await User.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });

    return res.status(200).json({
      nome,
      genero,
      data_nascimento,
      bio,
      detalhes,
      contatos,
      ano,
      periodo,
      sala,
      show_me,
      nome_escola,
      curso,
    });
  },

  async destroy(req, res) {
    const { _id } = req.user;

    await User.findOneAndRemove({ _id });

    return res.status(204).json();
  },
};
