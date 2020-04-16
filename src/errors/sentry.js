import * as Sentry from '@sentry/node';

export default (err, req, res, next) => {
  Sentry.captureException(err);

  return res.status(500).json({ error: 'SOMETHING WENT WRONG', details: err.toString() });
};
