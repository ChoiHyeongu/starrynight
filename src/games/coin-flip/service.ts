import { Message } from 'discord.js';
import { randomItem, parsePlayerChoices } from '@/utils';

export type Guess = 'heads' | 'tails';
const MAX_PLAYERS = 2;

function toss(args: string[], message: Message) {
  const players = parsePlayerChoices<Guess>(args);
  if (players.length < 2) {
    message.channel.send('사용법: !coin 이름:앞면 이름:뒷면');
    return;
  }
  if (players.length > MAX_PLAYERS) {
    message.channel.send(`최대 ${MAX_PLAYERS}명까지 참여할 수 있어요.`);
    return;
  }
  const result = randomItem(['heads', 'tails']);
  const winners = players.filter((p) => p.choice === result).map((p) => p.name);
  let reply = `**동전 던지기**\n결과: **${result}**`;
  reply += `\n${players.map((p) => `${p.name} 선택 ${p.choice}`).join(' | ')}`;
  if (winners.length) {
    reply += `\n승리: **${winners.join(', ')}**`;
  } else {
    reply += '\n맞춘 사람이 없네요!';
  }
  message.channel.send(reply);
}

export default { toss };
