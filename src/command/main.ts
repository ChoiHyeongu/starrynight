import { Message } from 'discord.js';
import api from '../api';
import { config } from '../constants';

export function run(message: Message) {
  const [command, data] = getCommandData(message.content);

  if (command === 'm') {
    music(message);
  }
}

function getCommandData(content: string): [string, string[]] {
  const [command, ...data] = content.replace(config.PREFIX, '').split(' ');
  return [command, data];
}

async function music(message: Message) {
  const keyword = message.content.replace(config.PREFIX + 'm ', '');
  const result = await getMusicList(keyword);
  const searchListStr = result.reduce((acc, video, index) => {
    return acc + `[${index + 1}] ${video.info.title}\n`;
  }, '');
  message.channel.send(searchListStr);
}

async function getMusicList(keyword: string) {
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
