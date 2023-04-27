const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
        mongodb_database: process.env.MONGODB_DATABASE_DEV,
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_clustername: process.env.MONGODB_USERNAME,
      mongodb_database: process.env.MONGODB_DATABASE,
    },
  };
};
