require('dotenv').config();

const logger = require('../logger');

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;

// Pull information from the process specific env files

logger.info(`DATABASE HOST: ${DB_HOST}`);

const masterConfig = {
  url: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}`,
  dialect: 'postgres',
  // disable logging; default: console.log
  logging: false,
  pool: {
    max: 20,
    min: 0,
    idle: 10000,
  },
  seederStorage: 'sequelize',
};

module.exports = {
  test: masterConfig,
  development: masterConfig,
  staging: masterConfig,
  production: masterConfig,
};
