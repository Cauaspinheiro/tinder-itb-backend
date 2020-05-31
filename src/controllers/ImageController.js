import errorHandler from '../errors/errorByStatus';
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

    if (!image) {
      return errorHandler(res, 404, {
        error: {
          pt_br: 'IMAGEM NÃO ENCONTRADA',
          en_us: 'IMAGE NOT FOUND',
        },
        details: {
          pt_br: `Nenhuma imagem com o index ${index} foi encontrada.`,
          en_us: `No image with the ${index} index`,
        },
        more_info: {
          index,
        },
      });
    }

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
      return errorHandler(res, 400, {
        error: {
          pt_br: 'INDEX INVÁLIDO',
          en_us: 'INVALID INDEX',
        },
        details: {
          pt_br: 'o index precisa ser um número e diferente de 0',
          en_us: 'the index must be a number and different from 0',
        },
        more_info: {
          index,
        },
      });
    }

    if (!images[index]) {
      return errorHandler(res, 404, {
        error: {
          pt_br: 'IMAGEM NÃO ENCONTRADA',
          en_us: 'IMAGE NOT FOUND',
        },
        details: {
          pt_br: `Nenhuma imagem com o index ${index} foi encontrada.`,
          en_us: `No image with the ${index} index`,
        },
        more_info: {
          index,
        },
      });
    }

    const profile = images[0];

    images[0] = images[index];

    images[index] = profile;

    const user = await User.findOneAndUpdate({ _id }, { images }, { new: true });

    return res.status(200).json(user.images[0]);
  },
};
