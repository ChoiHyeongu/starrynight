import { Message } from 'discord.js';
import { randomItem, mention } from '@/utils';

const MAX_PLAYERS = 6;

function fire(players: string[], message: Message) {
  if (players.length < 2) {
    message.channel.send('두 명 이상의 참가자를 입력해주세요.');
    return;
  }
  if (players.length > MAX_PLAYERS) {
    message.channel.send(`최대 ${MAX_PLAYERS}명까지 참여할 수 있어요.`);
    return;
  }
  const unlucky = randomItem(players);
  const summary = `**러시안 룰렛**\n탕! ${mention(unlucky)} 님이 걸렸어요...`;
  message.channel.send(summary);
}

export default { fire };
