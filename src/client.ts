// Require the necessary discord.js classes
import { Client, CommandInteraction, Intents, Message } from 'discord.js';
import Handler from './handler';
import { config } from './constants';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const handler = new Handler();

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!!');
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }

  if (isCommand(message.content)) {
    handler.run(message);
  }
});

function isCommand(content: string) {
  return content.startsWith(config.PREFIX);
}

client.login(config.DISCORD_TOKEN);
