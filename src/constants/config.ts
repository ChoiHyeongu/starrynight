import dotenv from 'dotenv';
import path from 'path';

const ENV_PATH = '../../.env';

dotenv.config({ path: path.join(__dirname, ENV_PATH) });

export const DISCORD_TOKEN = process.env['DISCORD_TOKEN'];

export const GOOGLE_API_KEY = process.env['GOOGLE_API_KEY'];

export const PREFIX = ';;';
