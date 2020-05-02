import errorByStatus from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { targetUser, user } = req;

  if (!user.matchs.includes(targetUser.id)) {
    return errorByStatus(res, 404, {
      error: {
        pt_br: 'USUÁRIO NÃO FOI ENCONTRADO EM MATCHS',
        en_us: 'USER NOT FOUND IN MATCHS',
      },
      details: {
        pt_br: `O usuário com o id ${targetUser.id} não está nos matchs do usuário logado`,
        en_us: `The user with the ${targetUser.id} id is not in the matchs of the logged user`,
      },
    });
  }

  return next();
};
