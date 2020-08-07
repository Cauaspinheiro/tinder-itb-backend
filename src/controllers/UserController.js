import User from '../models/User';

export default {
  async index(req, res) {
    const { prefs } = req;
    const { page = 1 } = req.query;

    const users = await User.find(prefs, {
      name: 1,
      gender: 1,
      birthdate: 1,
      bio: 1,
      grade: 1,
      course: 1,
      shift: 1,
      school_name: 1,
      school_class: 1,
      images: 1,
    }).skip(10 * (page - 1)).limit(10);

    res.header('X-Total-Count', users.length);

    return res.status(200).json(users);
  },

  async show(req, res) {
    const { targetUser: user } = req;

    const response = {
      name: user.name,
      gender: user.gender,
      bio: user.bio,
      birthdate: user.birthdate,
      grade: user.grade,
      shift: user.shift,
      school_class: user.school_class,
      school_name: user.school_name,
      course: user.course,
      images: user.images,
    };

    return res.status(200).json(response);
  },


};
