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
    const { user } = req;

    const response = {
      nome: user.nome,
      genero: user.genero,
      bio: user.bio,
      data_nascimento: user.data_nascimento,
      detalhes: user.detalhes,
      ano: user.ano,
      periodo: user.periodo,
      sala: user.sala,
      nome_escola: user.nome_escola,
      curso: user.curso,
    };

    return res.status(200).json(response);
  },

};
