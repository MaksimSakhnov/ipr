import { IFilm } from 'store/store.type';
import { client } from './axios';

export const FilmsApi = {
  async getFilms() {
    const response = await client.get<{ results: IFilm[] }>('films');
    return response.data.results;
  },
};
