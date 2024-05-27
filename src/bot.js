// File: src/bot.js (JavaScript)

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./utils/config');

const moderationCommands = require('./commands/moderation');
const customCommands = require('./commands/custom');
const settingsCommands = require('./commands/settings');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'help') {
    message.channel.send('List of available commands: ...');
  } else if (command === 'kick') {
    moderationCommands.kick(message, args);
  } else if (command === 'ban') {
    moderationCommands.ban(message, args);
  } else if (command === 'setprefix') {
    settingsCommands.setPrefix(message, args);
  } else if (command === 'customcommand') {
    customCommands.customCommand(message, args);
  }
});

client.login(token);