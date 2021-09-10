import cors from 'cors';
import config from '@/config';

const urlsAllowedToAccess = Object.values(config.rotues || {}).map(value => value) || [];

export const configuration = {
  credentials: true,
  origin: function (origin, callback) {
    if (!origin || urlsAllowedToAccess.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`${origin} not permitted by CORS policy.`));
    }
  },
};

export default (req, res, next) => {
  return cors(configuration)(req, res, next);
};
