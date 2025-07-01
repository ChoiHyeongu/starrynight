import { Message } from 'discord.js';
import { parsePlayerChoices } from '@/utils';

const choices = ['rock', 'paper', 'scissors'] as const;
export type Choice = typeof choices[number];

const MAX_PLAYERS = 4;

function winnerChoice(a: Choice, b: Choice): Choice {
  if (a === b) return a;
  if (
    (a === 'rock' && b === 'scissors') ||
    (a === 'paper' && b === 'rock') ||
    (a === 'scissors' && b === 'paper')
  ) {
    return a;
  }
  return b;
}

function play(args: string[], message: Message) {
  const players = parsePlayerChoices<Choice>(args);
  if (players.length < 2) {
    message.channel.send('사용법: !rps 이름:선택 이름:선택 ...');
    return;
  }
  if (players.length > MAX_PLAYERS) {
    message.channel.send(`최대 ${MAX_PLAYERS}명까지 참여할 수 있어요.`);
    return;
  }

  const uniqueChoices = [...new Set(players.map((p) => p.choice))];
  if (uniqueChoices.length === 1 || uniqueChoices.length === 3) {
    const summary = `**가위바위보**\n${players
      .map((p) => `${p.name}: ${p.choice}`)
      .join('\n')}\n무승부입니다!`;
    message.channel.send(summary);
    return;
  }

  const winning = winnerChoice(uniqueChoices[0] as Choice, uniqueChoices[1] as Choice);
  const winners = players.filter((p) => p.choice === winning).map((p) => p.name);
  const summary = `**가위바위보**\n${players
    .map((p) => `${p.name}: ${p.choice}`)
    .join('\n')}\n승리: **${winners.join(', ')}**`;
  message.channel.send(summary);
}

export default {
  play,
  choices,
};
