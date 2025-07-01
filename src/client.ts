import { Client, Intents, Message } from 'discord.js';
import { DISCORD_TOKEN, PREFIX } from '@/config';
import {
  rockPaperScissorsService,
  ladderService,
  rouletteService,
  coinFlipService,
  diceService,
} from '@/games';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('미니게임 봇이 준비됐어요!');
});

client.on('messageCreate', (message: Message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const [command, ...args] = message.content.slice(PREFIX.length).trim().split(/\s+/);

  switch (command) {
    case 'rps':
      rockPaperScissorsService.play(args, message);
      break;
    case 'ladder':
      ladderService.run(args, message);
      break;
    case 'roulette':
      rouletteService.fire(args, message);
      break;
    case 'coin':
      coinFlipService.toss(args, message);
      break;
    case 'dice':
      const sides = Number.isNaN(Number(args[0])) ? undefined : Number(args.shift());
      diceService.roll(sides, args, message);
      break;
  }
});

if (!DISCORD_TOKEN) {
  console.warn('DISCORD_TOKEN 값이 없습니다. .env 파일을 확인해주세요.');
}

client.login(DISCORD_TOKEN);
