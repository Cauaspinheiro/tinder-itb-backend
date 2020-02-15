import jwt from 'jsonwebtoken';

export default {
  async store(req, res) {
    const { user } = req;
    const { id, nome } = user;

    return res.status(201).json({
      user: { id, nome },
      jwt: jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES },
      ),
    });
  },
};
