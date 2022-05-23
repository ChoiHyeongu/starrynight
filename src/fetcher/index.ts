import axios, { AxiosRequestConfig } from 'axios';

class Fetcher {
  private static instance: Fetcher;

  static getInstance() {
    if (!Fetcher.instance) {
      Fetcher.instance = new Fetcher();
    }
    return Fetcher.instance;
  }

  async post(url: string, data?, config?: AxiosRequestConfig): Promise<any> {
    const response = await axios.post(url, data, config);
    return response;
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await axios.get(url, config);
    return response;
  }
}

export default Fetcher;
