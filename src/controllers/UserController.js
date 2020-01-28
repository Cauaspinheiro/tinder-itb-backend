import User from "../models/User";

export default {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async store(req, res) {
    const {
      name,
      genero,
      data_nascimento,
      bio,
      email,
      email_itb,
      detalhes,
      contatos,
      images,
      show_me,
      ano,
      periodo,
      sala
    } = req.body;

    const user = await User.create({
      name,
      genero,
      data_nascimento,
      bio,
      email,
      email_itb,
      detalhes,
      contatos,
      images,
      show_me,
      ano,
      periodo,
      sala
    });

    return res.json(user);
  }
};
