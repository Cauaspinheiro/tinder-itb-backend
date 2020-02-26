import User from '../models/User';

export default {
  async index(req, res) {
    const { prefs } = req;
    const { page = 1 } = req.query;

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
    }).skip(10 * (page - 1)).limit(10);

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
    });
  },

};
