import { google, youtube_v3 } from 'googleapis';
import { GaxiosResponse } from 'googleapis-common';
import { config } from '../../constants';

const service = google.youtube('v3');

/**
 * 유튜브 영상 검색
 * @param keyword 검색어
 * @param type 검색범위
 */
export async function search(keyword: string): Promise<GaxiosResponse<youtube_v3.Schema$SearchListResponse>> {
  const response = await service.search.list({
    key: config.GOOGLE_API_KEY,
    q: encodeURI(keyword),
    part: ['snippet'],
  });

  return response;
}

/**
 * 주소를 통해 영상 가져오기
 * @param url 영상 주소
 */
export async function getVideo(url: string) {}

/**
 * 플레이리스트 가져오기
 * @param url 플레이리스트 주소
 */
export async function getPlaylist(url: string) {}
