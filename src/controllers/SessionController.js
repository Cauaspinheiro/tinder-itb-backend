import jwt from 'jsonwebtoken';

export default {
  async store(req, res) {
    const { user } = req;
    const { id } = user;

    return res.json({
      user,
      jwt: jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES },
      ),
    });
  },
};