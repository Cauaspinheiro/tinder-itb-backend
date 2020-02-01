import School from '../../models/School';

async function checkSchool(req, res, next) {
  const { escola } = req.body;

  if (!escola) return next();

  const school = await School.findOne({ nome: escola });

  if (!school) return res.json('Escola não encontrada');

  return next();
}

export default checkSchool;
