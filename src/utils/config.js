// Filename: config.js (JavaScript)

const config = {
  discordToken: 'YOUR_DISCORD_TOKEN_HERE',
  prefix: '!',
  autoModerationEnabled: true,
  messageFilterEnabled: true,
  userMonitorEnabled: true,
  customCommands: [
    {
      command: 'hello',
      response: 'Hi there!',
    },
    {
      command: 'rules',
      response: 'Please follow the server rules for a pleasant experience.',
    },
  ],
  warningThreshold: 3,
  penaltyTypes: ['kick', 'ban'],
  logFilePath: 'logs/moderation.log',
  botSettings: {
    enableLogging: true,
    logChannel: 'mod-logs',
    welcomeMessage: 'Welcome to the server!',
    rulesChannel: 'rules',
  },
};

module.exports = config;