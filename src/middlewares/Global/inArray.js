import errorHandler from '../../errors/errorByStatus';

export default (req, res, next) => {
  const { dislikes, likes, matchs } = req.user;
  const { _id: id } = req.targetUser;

  if (dislikes.includes(id) || likes.includes(id) || matchs.includes(id)) {
    return errorHandler(res, 400, {
      error: {
        pt_br: 'USUÁRIO JÁ ESTÁ EM MATCHS, LIKES OU DISLIKES',
        en_us: 'USER ALREADY IN MATCHS, LIKES OR DISLIKES',
      },
      details: {
        pt_br: 'Você não pode colocar um usuário em mais de uma lista (matchs, likes ou dislikes)',
        en_us: 'You cannot place a user on more than one list (matchs, likes ou dislikes)',
      },
    });
  }

  return next();
};
