// Require the necessary discord.js classes
import { Client, CommandInteraction, Intents, Message } from 'discord.js';
import { command } from './command';
import { config } from './constants';

const PREFIX = ';;';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!!');
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }

  if (isCommand(message.content)) {
    command.run(message);
  }
});

function isCommand(content: string) {
  return content.startsWith(config.PREFIX);
}

client.login(config.DISCORD_TOKEN);
