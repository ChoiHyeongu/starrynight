import { Message } from 'discord.js';
import { config } from '../constants';
class Command {
  message: Message;
  input: string;
  args: any;

  constructor(message: Message) {
    this.message = message;
    const [input, ...args] = this.parseMessage(message.content);
    this.input = input;
    this.args = args;
  }

  parseMessage(content: string): [string, string[]] {
    const [input, ...args] = content.replace(config.PREFIX, '').split(' ');
    return [input, args];
  }
}

export default Command;
