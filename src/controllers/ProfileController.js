import User from '../models/User';

export default {
  async show(req, res) {
    const { user } = req;

    const response = {
      name: user.name,
      bio: user.bio,
      gender: user.gender,
      birthdate: user.birthdate,
      school: user.school,
      school_name: user.school_name,
      course: user.course,
      grade: user.grade,
      school_class: user.school_class,
      contacts: user.contacts,
      show_me: user.show_me,
      images: user.images,
      period: user.period,
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
      name,
      gender,
      birthdate,
      bio,
      detalhes,
      contacts,
      grade,
      period,
      school_class,
      show_me,
      school_name,
      course,
    } = await User.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });

    return res.status(200).json({
      name,
      gender,
      birthdate,
      bio,
      detalhes,
      contacts,
      grade,
      period,
      school_class,
      show_me,
      school_name,
      course,
    });
  },

  async destroy(req, res) {
    const { _id } = req.user;

    await User.findOneAndRemove({ _id });

    return res.status(204).end();
  },
};
