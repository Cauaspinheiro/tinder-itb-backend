import errorHandler from '../errors/errorsByStatus/400';
import User from '../models/User';


export default {
  async store(req, res) {
    const { publicUrl } = req;

    return res.status(201).json(publicUrl);
  },

  async index(req, res) {
    const { images } = req.user;

    return res.status(200).json(images);
  },

  async show(req, res) {
    const { images } = req.user;
    const { index } = req.params;

    const image = images[index];

    if (!image) return res.status(404).json({ error: 'FILE NOT FOUND' });

    return res.status(200).json(image);
  },

  async delete(req, res) {
    const { images, _id } = req.user;
    const { index } = req.params;

    req.image = images[index];

    images.splice(index, 1);

    await User.updateOne({ _id }, { images });

    return res.status(204).end();
  },

  async update(req, res) {
    const { index } = req.params;
    const { images, _id } = req.user;

    if (index === '0' || index.isNaN) {
      return errorHandler(res, {
        error: {
          pt_br: 'INDEX INVÁLIDO',
        },
        details: {
          pt_br: 'o index precisa ser diferente um número e diferente de 0',
        },
        more_info: {
          index,
        },
      });
    }

    if (!images[index]) return res.status(404).json({ error: 'FILE NOT FOUND' });

    const profile = images[0];

    images[0] = images[index];

    images[index] = profile;

    const user = await User.findOneAndUpdate({ _id }, { images }, { new: true });

    return res.status(200).json(user.images[0]);
  },
};
