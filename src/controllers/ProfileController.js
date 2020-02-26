import User from '../models/User';

export default {
  async show(req, res) {
    const { user } = req;

    const response = {
      nome: user.nome,
      bio: user.bio,
      genero: user.genero,
      escola: user.escola,
      curso: user.curso,
      serie: user.serie,
      sala: user.sala,
      imagens: user.imagens,
      contatos: user.contatos,
    };

    return res.status(200).json(response);
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

    return res.status(204).end();
  },
};
