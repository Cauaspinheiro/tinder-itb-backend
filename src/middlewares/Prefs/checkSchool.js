import School from '../../models/School';

async function checkSchool(req, res, next) {
  const { escola } = req.prefs;

  if (!escola) return next();

  const school = await School.findOne({ nome: escola });

  if (!school) return res.json('Escola não encontrada');

  req.school = school;

  return next();
}

export default checkSchool;
