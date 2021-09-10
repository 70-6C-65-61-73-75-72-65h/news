export default {
  databaseURL: process.env.MONGODB_URI,
  rotues: {
    organization: {
      ROOT: '/organization/:orgId',
      NEWS_LIST: '/organization/news',
      NEWS_ITEM: '/organization/news:newsId',
    },
    client: {
      ROOT: '/',
    },
  },
};
