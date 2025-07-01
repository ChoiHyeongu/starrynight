export function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function mention(userId: string): string {
  return `<@${userId}>`;
}

export interface PlayerChoice<T = string> {
  name: string;
  choice: T;
}

export function parsePlayerChoices<T>(args: string[]): PlayerChoice<T>[] {
  return args
    .map((arg) => arg.split(':'))
    .filter(([name, choice]) => Boolean(name) && Boolean(choice))
    .map(([name, choice]) => ({ name, choice: choice as unknown as T }));
}
