import errorHandler from '../../errors/errorsByStatus/400';

export default (req, res, next) => {
  const { dislikes, likes, matchs } = req.user;
  const { _id: id } = req.targetUser;

  if (dislikes.includes(id) || likes.includes(id) || matchs.includes(id)) {
    return errorHandler(res, {
      error: {
        pt_br: 'USUÁRIO JÁ ESTÁ EM MATCHS, LIKES OU DISLIKES',
      },
      details: {
        pt_br: 'Você não pode colocar um usuário em mais de uma lista (matchs, likes ou dislikes)',
      },
    });
  }

  return next();
};
