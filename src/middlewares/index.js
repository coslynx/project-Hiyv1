// File: src/middlewares/index.js (JavaScript)

const autoModeration = require('./autoModeration');
const messageFilter = require('./messageFilter');
const userMonitor = require('./userMonitor');

module.exports = {
  autoModeration,
  messageFilter,
  userMonitor
};