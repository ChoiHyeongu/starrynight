import { Message } from 'discord.js';
import { randomItem } from '../../utils';

const MAX_PLAYERS = 8;

function run(players: string[], message: Message) {
  if (players.length < 2) {
    message.channel.send('두 명 이상의 참가자를 입력해주세요.');
    return;
  }
  if (players.length > MAX_PLAYERS) {
    message.channel.send(`최대 ${MAX_PLAYERS}명까지 참여할 수 있어요.`);
    return;
  }
  const winner = randomItem(players);
  const lines = players.map((p) => `| ${p}`);
  const summary = `**사다리 타기**\n${lines.join('\n')}\n승리: **${winner}**`;
  message.channel.send(summary);
}

export default { run };
