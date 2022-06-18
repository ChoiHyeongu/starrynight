import { Message } from 'discord.js';
import api from '../api';
import Command from '../command';
import { config } from '../constants';
import utils from '../utils';

class Handler {
  musicRequestQueue = {};
  playlist = [];

  run(message: Message) {
    const command = new Command(message);

    if (command.input === 'm') {
      this.music(command);
    }
  }

  async music(command: Command) {
    const keyword = command.message.content.replace(config.PREFIX + 'm ', '');

    if (Number(keyword)) {
    } else if (utils.isURL(keyword)) {
    } else {
      const result = await this.searchMusic(keyword);
      command.message.channel.send(result);
    }
  }

  async searchMusic(keyword: string) {
    const result = await this.getMusicList(keyword);
    const searchListStr = result.reduce((acc, video, index) => {
      return acc + `[${index + 1}] ${video.info.title}\n`;
    }, '');
    return searchListStr;
  }

  async getMusicList(keyword: string) {
    const response = await api.youtube.search(keyword);
    const items = response.data.items ?? [];
    const videos = items.map((data) => ({
      id: data.id,
      protocol: 'youtube',
      info: {
        title: data.snippet?.title,
        thumbnails: data.snippet?.thumbnails,
        description: data.snippet?.description,
        publish_date: data.snippet?.publishedAt,
      },
      source: data,
    }));

    return videos;
  }
}

export default Handler;
