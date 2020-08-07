import errorByStatus from '../errors/errorByStatus';
import School from '../models/School';

export default {
  async index(req, res) {
    const schools = await School.find({}, { courses: 1, name: 1, location: 1 });

    return res.status(200).json(schools);
  },

  async show(req, res) {
    const { id: _id } = req.params;

    const school = await School.findOne({ _id });

    if (!school) {
      return errorByStatus(res, 404, {
        error: {
          pt_br: 'ESCOLA NÃO ENCONTRADA',
          en_us: 'SCHOOL NOT FOUND',
        },
        details: {
          pt_br: `Nenhuma escola com o id ${_id} foi encontrada.`,
          en_us: `We dont have a school with the ${_id} id`,
        },
        more_info: {
          id: _id,
        },
      });
    }

    return res.status(200).json(school);
  },
};
