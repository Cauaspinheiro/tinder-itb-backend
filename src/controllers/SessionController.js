import jwt from 'jsonwebtoken';

export default {
  async store(req, res) {
    const { user } = req;
    const { id, name } = user;

    return res.status(201).json({
      user: { id, name },
      jwt: jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES },
      ),
    });
  },
};
