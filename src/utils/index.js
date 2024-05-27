// File: src/utils/index.js (JavaScript)

const logger = require('./logger');
const config = require('./config');

const initializeUtils = () => {
  logger.log('Initializing utils...');
  config.loadConfig();
  logger.log('Utils initialized successfully.');
};

module.exports = {
  initializeUtils,
};