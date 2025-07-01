import { Message } from 'discord.js';

const MAX_PLAYERS = 4;

function roll(sides: number | undefined, players: string[], message: Message) {
  const max = sides && sides > 1 ? sides : 6;
  if (players.length < 1) {
    message.channel.send('한 명 이상의 참가자를 입력해주세요.');
    return;
  }
  if (players.length > MAX_PLAYERS) {
    message.channel.send(`최대 ${MAX_PLAYERS}명까지 참여할 수 있어요.`);
    return;
  }
  const results = players.map((p) => `${p}: **${Math.floor(Math.random() * max) + 1}**`);
  const summary = `**주사위 굴리기 (1-${max})**\n${results.join('\n')}`;
  message.channel.send(summary);
}

export default { roll };
